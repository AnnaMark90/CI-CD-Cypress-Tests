FROM cypress/included:13.15.0

WORKDIR /e2e

COPY package*.json ./
RUN npm ci && npx cypress install

COPY . .

ENTRYPOINT ["npx", "cypress", "run", "--browser", "chrome"]