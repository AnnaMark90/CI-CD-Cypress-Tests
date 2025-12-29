FROM cypress/included:15.7.0

WORKDIR /e2e

COPY package*.json ./
RUN npm ci

COPY . .

ENTRYPOINT ["npx", "cypress", "run", "--browser", "chrome"]
