FROM mobiledevops/android-sdk-image:34.0.0

USER root

# Install Node.js 18, Expo CLI, and EAS CLI
RUN apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get update \
    && apt-get install -y nodejs \
    && npm install -g expo-cli eas-cli \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ENTRYPOINT ["eas"]
CMD ["build", "--platform", "android", "--profile", "preview", "--local"]
