FROM oven/bun:1.2.4

WORKDIR /usr/src/backend
COPY package.json ./
COPY bun.lock ./
COPY index.ts ./

RUN bun install
CMD [ "bun", "index.ts" ]
