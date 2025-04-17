# Generated by https://smithery.ai. See: https://smithery.ai/docs/config#dockerfile
FROM node:lts-alpine
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --ignore-scripts

# Copy the rest of the application code
COPY . .

# Expose the required port if needed (not specified in README, using stdio by default)

CMD ["node", "index.js"]
