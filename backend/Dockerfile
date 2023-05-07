# Use a base image that includes Java
FROM openjdk:17

# Set the working directory in the container
WORKDIR /app

# Copy the Spring Boot application JAR file to the container
COPY target/server-docker.jar /app/server-docker.jar

# Expose the port that the Spring Boot application will run on
EXPOSE 8080

# Start the Spring Boot application when the container starts
CMD ["java", "-jar", "/app/server-docker.jar"]
