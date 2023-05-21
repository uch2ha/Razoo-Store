# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /frontend

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN yarn build

# Expose the app's port
EXPOSE 5173

# Start the app
CMD ["yarn", "dev"]