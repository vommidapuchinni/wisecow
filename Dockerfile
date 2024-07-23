# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application code
COPY . .

# Install fortune and cowsay
RUN apt-get update && apt-get install -y fortune cowsay

# Expose the port the app runs on
EXPOSE 4499

# Run the application
CMD ["node", "index.js"]
