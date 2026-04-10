FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --production
COPY index.js agents.js ./
ENV ANTHROPIC_API_KEY=""
ENTRYPOINT ["node", "index.js"]
