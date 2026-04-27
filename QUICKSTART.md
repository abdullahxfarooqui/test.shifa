# 🚀 Quick Start Guide

## Prerequisites

Before you begin, install **Node.js 18+** from https://nodejs.org/

- **Node.js** includes **npm** automatically
- No other tools needed

---

## On macOS/Linux

### Option 1: Run the Setup Script (Easiest)

```bash
cd /Users/abdullahfarooqui/test.shifa
chmod +x start-dev.sh
./start-dev.sh
```

This will:
- ✅ Check Node.js/npm are installed
- ✅ Install dependencies
- ✅ Start the dev server
- ✅ Show you the URLs to access

### Option 2: Manual Commands

```bash
# Navigate to project
cd /Users/abdullahfarooqui/test.shifa

# Install dependencies (only needed once)
npm install

# Start development server
npm run dev
```

---

## On Windows

### Option 1: Run the Batch Script (Easiest)

1. Edit `start-dev.bat` and change this line:
   ```batch
   set PROJECT_DIR=C:\Users\YourUsername\test.shifa
   ```
   to match your actual project path

2. Double-click `start-dev.bat`

This will:
- ✅ Check Node.js/npm are installed
- ✅ Install dependencies
- ✅ Start the dev server
- ✅ Show you the URLs to access

### Option 2: Manual Commands

```bash
# Open Command Prompt (cmd) or PowerShell

# Navigate to project
cd C:\Users\YourUsername\test.shifa

# Install dependencies (only needed once)
npm install

# Start development server
npm run dev
```

---

## When You See This

```
> ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

**The server is running!** Open your browser and go to:

### 📍 Access the Health Blogs

**Main Listing Page** (all 12 articles):
```
http://localhost:3000/health-library/blogs
```

**Sample Articles to Try:**

1. Heart Attack Warning Signs:
   ```
   http://localhost:3000/health-library/blogs/heart-attack-warning-signs-islamabad
   ```

2. Diabetes Prevention:
   ```
   http://localhost:3000/health-library/blogs/type-2-diabetes-prevention-management-pakistan
   ```

3. PCOS Treatment:
   ```
   http://localhost:3000/health-library/blogs/pcos-causes-symptoms-treatment-islamabad
   ```

4. Stroke Recognition:
   ```
   http://localhost:3000/health-library/blogs/stroke-warning-signs-act-fast-pakistan
   ```

5. Vaccination Schedule:
   ```
   http://localhost:3000/health-library/blogs/vaccination-schedule-children-pakistan
   ```

**All 12 articles are available!** Just navigate to `/health-library/blogs` and click any article.

---

## What to Look For

### On the Listings Page (`/health-library/blogs`):
- ✅ Featured article at top
- ✅ Grid of 12 article cards
- ✅ Category badges (red)
- ✅ Reading time on each card
- ✅ Filter by category
- ✅ Pagination controls

### On Any Article Page:
- ✅ **Reading progress bar** at top (animates as you scroll)
- ✅ **Key statistics cards** (4 per article, animated on scroll)
- ✅ **Table of contents** (sticky sidebar on desktop)
- ✅ **Article content** with proper formatting
- ✅ **Interactive chart** with real data
- ✅ **FAQ accordion** (expandable Q&As)
- ✅ **Hospital contact info** at bottom

---

## Stop the Server

Press **`Ctrl + C`** in the terminal

```
^C
npm notice It looks like you are running npm 9.x.x
> Terminated
```

---

## Troubleshooting

### "npm: command not found"
- **Solution**: Node.js isn't installed. Download from https://nodejs.org/ and restart your terminal

### "Port 3000 already in use"
- **Solution**: Run on a different port:
  ```bash
  npm run dev -- -p 3001
  ```
  Then visit: `http://localhost:3001/health-library/blogs`

### "Module not found" errors
- **Solution**: Clean reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  npm run dev
  ```

### Styling looks broken
- **Solution**: 
  ```bash
  npm run build
  npm run dev
  ```

### Still having issues?
Check that:
1. Node.js 18+ is installed: `node --version`
2. npm is installed: `npm --version`
3. You're in the right directory: `pwd` (macOS/Linux) or `cd` (Windows)
4. You ran `npm install` before `npm run dev`

---

## File Structure

```
test.shifa/
├── start-dev.sh              ← Run this (macOS/Linux)
├── start-dev.bat             ← Run this (Windows)
├── package.json              ← Project config
├── src/
│   ├── app/
│   │   └── health-library/blogs/
│   │       ├── page.tsx      ← Listing page
│   │       └── [slug]/
│   │           └── page.tsx  ← Article detail page
│   ├── components/
│   │   └── blog/
│   │       └── BlogDetailClient.tsx  ← Article renderer
│   ├── data/
│   │   ├── health-articles.ts        ← Article data
│   │   └── article-enhancements.ts   ← Charts & stats
│   └── api/
│       └── news/route.ts     ← API endpoint
└── shifa_health_blogs.md     ← Article content source
```

---

## 🎉 You're Ready!

The health blog system is fully functional with:
- ✅ 12 complete medical articles
- ✅ Interactive charts with real data
- ✅ Professional design with Shifa branding
- ✅ Smooth animations (Framer Motion)
- ✅ Responsive layout (mobile to desktop)
- ✅ SEO optimized
- ✅ Expandable FAQs

Enjoy exploring! 🏥📱
