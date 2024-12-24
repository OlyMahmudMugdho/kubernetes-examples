FROM node:20-slim
WORKDIR /app
COPY package.json .
RUN npm install
RUN apt-get update -y && apt-get install -y openssl build-essential libpq-dev
COPY . .
RUN npx prisma generate
EXPOSE 3000
ENTRYPOINT ["node", "index.js"]