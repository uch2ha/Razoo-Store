# Use a base image that includes Java and Maven
FROM maven:3.8.3-openjdk-17 AS build

# Set the working directory in the container
WORKDIR /backend

# Copy the pom.xml file to the container
COPY pom.xml .

# Download and cache the dependencies
RUN mvn dependency:go-offline -B

# Copy the application source code to the container
COPY src src

# Build the application with Maven
RUN mvn package -DskipTests

# Use a base image that includes Java
FROM openjdk:17

# Set the working directory in the container
WORKDIR /backend

# Copy the application JAR file from the build stage to the container
COPY --from=build /backend/target/server-docker.jar /backend/server-docker.jar

# Expose the port that the Spring Boot application will run on
EXPOSE 8080

# Start the Spring Boot application when the container starts
CMD ["java", "-jar", "/backend/server-docker.jar"]
