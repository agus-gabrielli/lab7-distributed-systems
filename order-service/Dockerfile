# Use the official Node.js slim base image
FROM node:slim

# Set the working directory within the container to /orders
WORKDIR /orders

# Copy package.json and package-lock.json (if exists) to the working directory
COPY package*.json .

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Define the default command to run when the container starts (npm run dev)
CMD npm run dev
