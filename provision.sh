#!/usr/bin/env bash
sudo apt-get update

# Install utilities
sudo apt-get install -y build-essential unzip

# Set Timezone if needed
#sudo timedatectl set-timezone America/New_York

# Install node 12
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# Python package manager so we can install latest aws-cli
# sudo apt-get install -y 

# Upgrade Pip
# sudo pip install --upgrade pip

# Install AWS CLI
# sudo pip install awscli

# global NPM packages
sudo npm install -g @angular/cli

# Fix npm permissions issues (un-privileged provisioner)
sudo npm i -g npm
sudo chown -R $USER:$(id -gn $USER) /home/vagrant/.config
sudo chown -R 1000:1000 "/home/vagrant/.npm"

cd /var/www/
npm install