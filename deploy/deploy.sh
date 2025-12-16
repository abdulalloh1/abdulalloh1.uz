#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/srv/apps/abdulalloh1.uz/app"

cd "$APP_DIR"
git fetch --all
git reset --hard origin/main

docker compose up -d --build
docker image prune -f