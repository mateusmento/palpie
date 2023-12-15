#!/bin/bash
yum update -y
yum install git -y
git clone https://github.com/mateusmento/palpie
cd palpie/api

yum install docker -y
systemctl start docker
systemctl enable docker
usermod -aG docker $USER
newgrp docker


export HOME=~
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install

npm install -g pnpm
pnpm install
npm run build

echo "export PALPIE_POSTGRES_HOST=${palpie_postgres_host}" >> ~/.bashrc
echo "export PALPIE_POSTGRES_PORT=5432" >> ~/.bashrc
echo "export PALPIE_POSTGRES_DATABASE=postgres" >> ~/.bashrc
echo "export PALPIE_POSTGRES_USERNAME=postgres" >> ~/.bashrc
echo "export PALPIE_POSTGRES_PASSWORD=postgres" >> ~/.bashrc
source ~/.bashrc
npm run start:prod
