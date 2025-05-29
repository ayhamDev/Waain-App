## Base image with Android SDK 34
FROM mobiledevops/android-sdk-image:34.0.0

# Install Node.js, Yarn, Expo CLI and EAS CLI
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get update \
    && apt-get install -y nodejs \
    && npm install -g expo-cli eas-cli \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package manifest and lockfile for dependency caching
COPY package*.json  ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of your Expo project
COPY . .

# Default entrypoint to EAS CLI
ENTRYPOINT ["eas"]
CMD ["build", "--platform", "android", "--profile", "preview","--local"]
