#!/usr/bin/env bash
set -e

# Install Exercism CLI
EXERCISM_URL=$(curl -s https://api.github.com/repos/exercism/cli/releases/latest \
  | grep browser_download_url \
  | grep 'linux.*x86_64' \
  | cut -d'"' -f4)
curl -fL "$EXERCISM_URL" | sudo tar -xz -C /usr/local/bin exercism
exercism configure \
  --token=32f807e1-9be7-4696-9f5c-639b04f5fd6d \
  --workspace=/workspaces/exercism-typescript
echo 'Exercism CLI ready'

# Set up corepack/yarn
sudo corepack enable
sudo corepack prepare yarn@4.5.1 --activate || true
