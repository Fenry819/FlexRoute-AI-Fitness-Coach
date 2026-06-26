@echo off
title FlexRoute Launcher
color 0c

echo =========================================
echo       BOOTING FLEXROUTE NEURAL ENGINE
echo =========================================
echo.

echo [1/3] Waking up Local AI (Ollama)...
start "Ollama Engine" cmd /c "ollama serve"
timeout /t 2 /nobreak >nul

echo [2/3] Igniting Python Backend Server...
start "FlexRoute Backend Engine" cmd /k "call venv\Scripts\activate && python server.py"

echo Waiting for Backend Neural Engine to stabilize...
timeout /t 8 /nobreak >nul

echo [3/3] Launching Electron Interface...
start "FlexRoute Frontend" cmd /k "cd flex-web && npm run electron:dev"