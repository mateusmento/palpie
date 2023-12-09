#!/bin/bash
yum update -y
yum install git -y
git clone https://github.com/mateusmento/palpie
cd palpie/app

export HOME=~
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install

npm install -g pnpm
pnpm install

echo "export PALPIE_API_HOST=${palpie_api_host}" >> ~/.bashrc
echo "export VITE_PALPIE_API_HOST=${palpie_api_host}" >> ~/.bashrc
source ~/.bashrc

npm run build

sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
rm -rf /usr/share/nginx/html/*
mv dist/* /usr/share/nginx/html/
