FROM oven/bun:1.2.4

WORKDIR /usr/src/frontend
COPY package.json ./
COPY bun.lock ./
RUN bun install

COPY . .
RUN bun run build

EXPOSE 5173
CMD [ "bun", "run", "preview" ]
