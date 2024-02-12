 # For more information, please refer to https://aka.ms/vscode-docker-python
ARG BASE_CONTAINER=ucsdets/datahub-base-notebook:2022.3-stable

# FROM $BASE_CONTAINER
# EXPOSE 3000
# USER root

# WORKDIR /react-med-dash


# # Keeps Python from generating .pyc files in the container
# ENV PYTHONDONTWRITEBYTECODE=1
# # Turns off buffering for easier container logging
# ENV PYTHONUNBUFFERED=1


# # Copies the entirety of the current directory to the image, in order to access files later


# # Install Node.js
# RUN apt-get update && apt-get install -y curl \
#     && curl -sL https://deb.nodesource.com/setup_current.x | bash - \
#     && apt-get install -y nodejs \
#     && apt-get clean \
#     && rm -rf /var/lib/apt/lists/*

# RUN npm install

# COPY requirements.txt ./

# # Install pip requirements
# RUN pip install --no-cache-dir -r requirements.txt

# WORKDIR /app
# COPY . /app

# RUN python pull_vital_data.py

# # Creates a non-root user with an explicit UID and adds permission to access the /app folder
# # For more info, please refer to https://aka.ms/vscode-docker-python-configure-containers

# # During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug

# WORKDIR /react-med-dash

# CMD ["npm run", "dev"]
FROM node:20
EXPOSE 8000
USER root

# Assuming your project files should actually be in /react-med-dash
WORKDIR /react-med-dash

# Install Node.js
# RUN apt-get update && apt-get install -y curl \
#     # && curl -sL https://deb.nodesource.com/setup_current.x | bash - \
#     # && apt-get install -y nodejs \
#     # && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash - \
#     # && export NVM_DIR="$HOME/.nvm" \
#     # && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
#     # && [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" \
#     # && nvm install 20 \
#     # && nvm use 20 \
#     # && nvm alias default 20 \
#     python3-pip \
#     && npm install -g npm@10.2.3 \
#     && apt-get clean \
#     && rm -rf /var/lib/apt/lists/* 

# RUN apt install python3
# Install Python3, pip, and venv
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-venv \
    && rm -rf /var/lib/apt/lists/*

# Create a virtual environment
RUN python3 -m venv /venv

# Activate the virtual environment for subsequent commands
ENV PATH="/venv/bin:$PATH"

# Copy your application's requirements.txt and install Python dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Continue with your Dockerfile (copying application code, etc.)
COPY . /react-med-dash
WORKDIR /react-med-dash

# Install Node.js dependencies
RUN npm install

# If you have a Python script to run before starting your service
#RUN python pull_vital_data.py

# Make sure the CMD is executed in the correct directory and with correct syntax

CMD ["npm", "run", "dev"]