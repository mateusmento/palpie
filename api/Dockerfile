FROM node:18.12.1-bullseye-slim as build
WORKDIR /home/node/app
RUN chown node:node .
USER node
COPY --chown=node:node package*.json .
RUN npm ci && npm cache clean --force
COPY --chown=node:node . .
RUN npm run build

FROM node:18.12.1-bullseye-slim as artifact
RUN apt-get update -y && apt-get install dumb-init -y --no-install-recommends
WORKDIR /home/node/app
RUN chown node:node .
ENV NODE_ENV=production
USER node
COPY --chown=node:node package*.json .
RUN npm ci --omit=dev
COPY --from=build --chown=node:node /home/node/app/dist/ dist/
CMD ["dumb-init", "node", "dist/main.js"]
