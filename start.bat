@echo off
echo.

set NodePackagesPath=C:\Users\csonn_29kwwfm\Node\Spring-Break-Project\Spring-Break-Project-NodeJS\bot.js PackageManager // This is my path, you can edit them

set Path=%NodePackagesPath%\node_modules\.bin;%PATH%
set Path=%NodePackagesPath%;%PATH%

set NODE_PATH=%NodePackagesPath%\node_modules;%NODE_PATH%
set NODE_ENV=production

echo Environment variables are successfully added.
echo. 
echo. 
echo. 

node bot.js