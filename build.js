const fs = require('fs');
const path = require('path');

// Build script to replace environment variables for Netlify deployment
function replaceEnvVars() {
    const scriptPath = path.join(__dirname, 'script.js');
    let scriptContent = fs.readFileSync(scriptPath, 'utf8');
    
    // Replace the API key placeholder with environment variable
    const apiKey = process.env.OPENWEATHER_API_KEY || '';
    scriptContent = scriptContent.replace(
        'window.OPENWEATHER_API_KEY = \'#{OPENWEATHER_API_KEY}#\';',
        `window.OPENWEATHER_API_KEY = '${apiKey}';`
    );
    
    fs.writeFileSync(scriptPath, scriptContent);
    console.log('Environment variables processed successfully');
}

// Copy index file
function copyIndexFile() {
    const sourcePath = path.join(__dirname, 'gg.html');
    const targetPath = path.join(__dirname, 'index.html');
    
    if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, targetPath);
        console.log('index.html created from gg.html');
    }
}

// Run build process
console.log('Starting build process...');
copyIndexFile();
replaceEnvVars();
console.log('Build completed successfully!');
