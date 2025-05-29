FROM node:20-alpine

# Install dependencies: openjdk17, bash, curl, git, unzip, wget
RUN apk update && apk add --no-cache \
    openjdk17 \
    bash \
    curl \
    git \
    unzip \
    wget

# Set JAVA_HOME and add to PATH
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk
ENV PATH="$JAVA_HOME/bin:$PATH"

# Set Android SDK root
ENV ANDROID_SDK_ROOT=/opt/android-sdk

# Download and setup Android command-line tools
RUN mkdir -p $ANDROID_SDK_ROOT/cmdline-tools && \
    cd $ANDROID_SDK_ROOT/cmdline-tools && \
    wget https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip -O cmdline-tools.zip && \
    unzip cmdline-tools.zip && \
    rm cmdline-tools.zip && \
    mv cmdline-tools latest

# Add Android SDK cmdline-tools and platform-tools to PATH
ENV PATH="$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/platform-tools"

# Accept licenses and install SDK components
RUN yes | sdkmanager --sdk_root=$ANDROID_SDK_ROOT --licenses && \
    sdkmanager --sdk_root=$ANDROID_SDK_ROOT \
    "platform-tools" \
    "platforms;android-35" \
    "build-tools;35.0.0"

# Install EAS CLI globally (Node is already installed in base image)
RUN npm install --global eas-cli

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm i

# Copy rest of the app
COPY . .

# Default command to build app locally using eas
CMD ["eas", "build", "--platform", "android", "--profile", "preview", "--local"]
