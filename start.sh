#!/usr/bin/env bash

set -e

echo "🚀 Starting development environment..."

# Check if node_modules exists; if not, install dependencies
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  if ! npm install; then
    echo "❌ 'npm install' failed."
    echo "👉 This is often due to expired SSO credentials. Try running 'gcert' and then run ./start.sh again."
    exit 1
  fi
fi

# Check for GEMINI_API_KEY in environment or .env.local
if [ -z "$GEMINI_API_KEY" ] && [ ! -f ".env.local" ]; then
  echo "⚠️  Note: GEMINI_API_KEY environment variable is not set and .env.local was not found."
  echo "   If your app requires Gemini API access, please set it in .env.local or export it."
fi

echo "✨ Starting the development server..."
exec npm run dev
