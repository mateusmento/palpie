#!/bin/bash
yum update -y
yum install git -y
git clone https://github.com/mateusmento/palpie
cd palpie/api

export HOME=~
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install

npm install
npm run build
npm run start:prod
