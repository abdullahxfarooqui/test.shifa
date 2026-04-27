#!/bin/bash

# Shifa Health Blog - Local Development Setup Script
# Run this on your local machine after cloning the project

set -e  # Exit on error

echo "=========================================="
echo "🏥 Shifa Health Blog - Setup & Run"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "   Download from: https://nodejs.org/"
    echo "   Then run this script again."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    echo "   npm comes with Node.js"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Navigate to project directory
PROJECT_DIR="/Users/abdullahfarooqui/test.shifa"
if [ ! -d "$PROJECT_DIR" ]; then
    echo "⚠️  Project directory not found at $PROJECT_DIR"
    echo "   Please update the PROJECT_DIR variable in this script"
    exit 1
fi

cd "$PROJECT_DIR"
echo "📂 Working in: $(pwd)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi
echo ""

# Show what's available
echo "=========================================="
echo "📝 Health Blog Articles Available:"
echo "=========================================="
echo "1. Heart Attack Warning Signs"
echo "2. Type 2 Diabetes Prevention"
echo "3. PCOS Causes & Treatment"
echo "4. Stroke Recognition (FAST)"
echo "5. Knee Pain Management"
echo "6. Child Vaccination Schedule"
echo "7. Depression & Mental Health"
echo "8. Foods That Lower Blood Pressure"
echo "9. Understanding Lab Test Results"
echo "10. Health Problems in Older Adults"
echo "11. Heart Attack First Aid"
echo "12. When Is a Headache Serious"
echo ""

echo "=========================================="
echo "🚀 Starting Development Server..."
echo "=========================================="
echo ""
echo "This will start the dev server on http://localhost:3000"
echo ""
echo "📍 Access these URLs in your browser:"
echo "   - Blogs listing:     http://localhost:3000/health-library/blogs"
echo "   - Sample article 1:  http://localhost:3000/health-library/blogs/heart-attack-warning-signs-islamabad"
echo "   - Sample article 2:  http://localhost:3000/health-library/blogs/type-2-diabetes-prevention-management-pakistan"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
