FROM node:18.12.1-bullseye-slim as build
ENV NPM_CONFIG_PREFIX=/home/node/.node-global
ENV PATH=$PATH:$NPM_CONFIG_PREFIX/bin
WORKDIR /home/node/app
RUN chown node:node .
USER node
RUN npm install -g pnpm
COPY --chown=node:node package*.json pnpm-lock.yaml ./
RUN pnpm install
COPY --chown=node:node . .
RUN npm run build

FROM nginx:1.23.3-alpine as deploy
RUN rm -rf /usr/share/nginx/html/*
RUN chown nginx:nginx .
COPY --from=build --chown=nginx:nginx /home/node/app/dist/ /usr/share/nginx/html/
# USER nginx
