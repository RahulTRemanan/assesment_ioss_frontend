FROM node:20

WORKDIR /app

# Copy dependency files first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose React dev server port
EXPOSE 3000

# Start React app in development mode
CMD ["npm", "start"]
