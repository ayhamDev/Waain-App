FROM node:20

# Install dependencies: openjdk-17-jdk, curl, git, unzip, wget
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    openjdk-17-jdk \
    bash \
    curl \
    git \
    unzip \
    wget && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set JAVA_HOME and update PATH
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
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

# Add Android SDK tools to PATH
ENV PATH="$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/platform-tools"

# Accept licenses and install SDK components
RUN yes | sdkmanager --sdk_root=$ANDROID_SDK_ROOT --licenses && \
    sdkmanager --sdk_root=$ANDROID_SDK_ROOT \
    "platform-tools" \
    "platforms;android-35" \
    "build-tools;35.0.0"

# Install EAS CLI and Bun globally
RUN npm install --global eas-cli bun

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Default build command
CMD ["eas", "build", "--platform", "android", "--profile", "preview", "--local"]
