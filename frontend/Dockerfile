# Use an official Node.js runtime as the base image
FROM node:16-slim

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application to the container
COPY package.json package-lock.json ./
COPY public/ public/
COPY src/ src/

# Adjust permissions for the entire app directory
RUN chown -R node:node /app

# Use the "node" user for subsequent commands
USER node

# Expose port 3000 for the React development server
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
