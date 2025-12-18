# Use the latest Node Alpine image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install

# Copy source code
COPY . .

# Start the development server
CMD ["npm", "run", "dev"]