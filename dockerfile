# Base image with Android SDK 34
FROM thyrlian/android-sdk:latest

# Switch to root user to allow package installation
USER root

# Install Node.js 18, Expo CLI, and EAS CLI
RUN apt-get update && apt-get install -y curl gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get update \
    && apt-get install -y nodejs \
    && npm install -g expo-cli eas-cli \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package manifest and lockfile
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your Expo project
COPY . .

# Set EAS CLI as the default entrypoint
ENTRYPOINT ["eas"]
CMD ["build", "--platform", "android", "--profile", "preview", "--local"]
