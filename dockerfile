FROM node:20-alpine

# Avoid interactive prompts (mostly for Debian but keeping for convention)
ENV DEBIAN_FRONTEND=noninteractive

# Install core dependencies including openjdk-17, curl, git, unzip, wget
RUN apk update && apk add --no-cache \
    openjdk17 \
    curl \
    git \
    unzip \
    wget \
    bash \
    && rm -rf /var/cache/apk/*

# Set JAVA_HOME environment variable (Alpine path for openjdk17)
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk
ENV PATH="$JAVA_HOME/bin:$PATH"

# Set up Android SDK
ENV ANDROID_SDK_ROOT=/opt/android-sdk
RUN mkdir -p $ANDROID_SDK_ROOT/cmdline-tools && \
    cd $ANDROID_SDK_ROOT && \
    wget https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip -O cmdline-tools.zip && \
    unzip cmdline-tools.zip -d cmdline-tools && \
    rm cmdline-tools.zip

# Add SDK tools to PATH
ENV PATH="$PATH:$ANDROID_SDK_ROOT/cmdline-tools/tools/bin:$ANDROID_SDK_ROOT/platform-tools"

# Accept licenses and install required SDK components (Android 35)
RUN yes | sdkmanager --sdk_root=$ANDROID_SDK_ROOT --licenses && \
    sdkmanager --sdk_root=$ANDROID_SDK_ROOT \
    "platform-tools" \
    "platforms;android-35" \
    "build-tools;35.0.0"

# Install EAS CLI globally via npm (Node already included in node:20-alpine)
RUN npm install --global eas-cli

# Set working directory
WORKDIR /app

# Install JS dependencies via npm
COPY package*.json ./
RUN npm ci --silent

# Copy the rest of the project
COPY . .

# Default build command
CMD ["eas", "build", "--platform", "android", "--profile", "preview", "--local"]
