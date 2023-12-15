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

FROM node:18.12.1-bullseye-slim as artifact
RUN apt-get update -y && apt-get install dumb-init -y --no-install-recommends
ENV NPM_CONFIG_PREFIX=/home/node/.node-global
ENV PATH=$PATH:$NPM_CONFIG_PREFIX/bin
WORKDIR /home/node/app
RUN chown node:node .
USER node
RUN npm install -g pnpm
COPY --chown=node:node package*.json pnpm-lock.yaml ./
RUN pnpm install --prod
COPY --from=build --chown=node:node /home/node/app/dist/ dist/
CMD ["dumb-init", "node", "dist/main.js"]
