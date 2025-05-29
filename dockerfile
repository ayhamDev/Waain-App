FROM ubuntu:22.04

# Avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install core dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    curl \
    git \
    unzip \
    openjdk-17-jdk \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Set JAVA_HOME environment variable
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
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

# Install Node.js, Yarn, and EAS CLI
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get update && \
    apt-get install -y --no-install-recommends nodejs && \
    npm install --global yarn eas-cli && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Install JS dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Default build command
CMD ["eas", "build", "--platform", "android", "--profile", "preview", "--local"]