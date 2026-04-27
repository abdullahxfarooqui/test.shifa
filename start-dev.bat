@echo off
REM Shifa Health Blog - Local Development Setup Script (Windows)
REM Run this on your local machine after cloning the project

setlocal enabledelayedexpansion

echo.
echo ==========================================
echo 0H Shifa Health Blog - Setup ^& Run
echo ==========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo XX Node.js is not installed!
    echo    Download from: https://nodejs.org/
    echo    Then run this script again.
    echo.
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo XX npm is not installed!
    echo    npm comes with Node.js
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i

echo Node.js version: %NODE_VERSION%
echo npm version: %NPM_VERSION%
echo.

REM Navigate to project directory
set PROJECT_DIR=C:\Users\YourUsername\test.shifa
REM UPDATE THIS PATH to match your project location

if not exist "%PROJECT_DIR%" (
    echo.
    echo WARNING: Project directory not found at %PROJECT_DIR%
    echo Please update PROJECT_DIR in this script to match your setup
    echo.
    pause
    exit /b 1
)

cd /d "%PROJECT_DIR%"
echo Current directory: %cd%
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo Dependencies installed
) else (
    echo Dependencies already installed
)
echo.

REM Show available articles
echo ==========================================
echo  Health Blog Articles Available:
echo ==========================================
echo 1. Heart Attack Warning Signs
echo 2. Type 2 Diabetes Prevention
echo 3. PCOS Causes ^& Treatment
echo 4. Stroke Recognition (FAST)
echo 5. Knee Pain Management
echo 6. Child Vaccination Schedule
echo 7. Depression ^& Mental Health
echo 8. Foods That Lower Blood Pressure
echo 9. Understanding Lab Test Results
echo 10. Health Problems in Older Adults
echo 11. Heart Attack First Aid
echo 12. When Is a Headache Serious
echo.

echo ==========================================
echo  Starting Development Server...
echo ==========================================
echo.
echo This will start the dev server on http://localhost:3000
echo.
echo ACCESS THESE URLS IN YOUR BROWSER:
echo   - Blogs listing:     http://localhost:3000/health-library/blogs
echo   - Sample article 1:  http://localhost:3000/health-library/blogs/heart-attack-warning-signs-islamabad
echo   - Sample article 2:  http://localhost:3000/health-library/blogs/type-2-diabetes-prevention-management-pakistan
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
