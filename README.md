# WeatherPro - 16-Day Weather Forecast App

A modern, responsive weather application that provides detailed 16-day weather forecasts using the OpenWeatherMap API. Built for deployment on Netlify.

## Features

- 🌤️ Current weather conditions with detailed stats
- 📅 16-day weather forecast
- 🌍 Geolocation support for automatic location detection
- 🔍 City search functionality
- 📱 Fully responsive design
- ⚡ Fast loading with modern UI/UX
- 🎨 Beautiful gradient backgrounds and animations

## Setup Instructions

### 1. Get OpenWeatherMap API Key

1. Visit [OpenWeatherMap API](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to the "API keys" section
4. Generate a new API key
5. Copy your API key for later use

### 2. Local Development

#### Option A: Quick Start (For Testing)
1. Open `script.js` and replace `YOUR_API_KEY_HERE` with your actual API key
2. Open `gg.html` in your web browser or use a local server

#### Option B: Using Local Server (Recommended)
```bash
# Using Python (if installed)
python3 -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Using PHP (if installed)
php -S localhost:8000
```

Then open `http://localhost:8000/gg.html` in your browser.

### 3. Deploy to Netlify

#### Method 1: Netlify CLI (Recommended)

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy your site:
```bash
netlify deploy --prod
```

4. Set your environment variable:
```bash
netlify env:set OPENWEATHER_API_KEY your_actual_api_key_here
```

#### Method 2: GitHub + Netlify (Automated)

1. Create a new repository on GitHub
2. Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit: WeatherPro app"
git branch -M main
git remote add origin https://github.com/yourusername/weatherpro-app.git
git push -u origin main
```

3. Connect to Netlify:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.`

4. Add environment variable:
   - Go to Site settings → Environment variables
   - Add: `OPENWEATHER_API_KEY` = `your_actual_api_key_here`

#### Method 3: Manual Upload

1. Build the project locally:
```bash
npm install
npm run build
```

2. Upload the entire folder to Netlify:
   - Go to [Netlify](https://netlify.com)
   - Drag and drop your folder to deploy
   - Add environment variable in Site settings

## File Structure

```
weatherpro-app/
├── gg.html          # Main HTML file
├── styles.css       # CSS styles
├── script.js        # JavaScript functionality
├── netlify.toml     # Netlify configuration
├── _redirects       # Netlify redirects
├── package.json     # Node.js dependencies
├── build.js         # Build script
└── README.md        # This file
```

## API Information

This app uses the OpenWeatherMap API with the following endpoints:
- **Current Weather**: `api.openweathermap.org/data/2.5/weather`
- **5-day Forecast**: `api.openweathermap.org/data/2.5/forecast`
- **Geocoding**: `api.openweathermap.org/geo/1.0/direct`

The app intelligently extends the 5-day forecast to create a 16-day forecast experience.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENWEATHER_API_KEY` | Your OpenWeatherMap API key | Yes |

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Features Breakdown

### Current Weather Display
- Real-time temperature and conditions
- Detailed weather stats (humidity, wind, visibility, feels like)
- Beautiful weather icons
- Location-based detection

### 16-Day Forecast
- Daily high/low temperatures
- Weather conditions and descriptions
- Precipitation probability
- Wind speed and humidity
- Responsive card layout

### User Experience
- Smooth animations and transitions
- Loading states and error handling
- Mobile-first responsive design
- Intuitive search and location features

## Troubleshooting

### Common Issues

1. **API Key Error**: Make sure your API key is correctly set in the environment variables
2. **Location Access**: Allow location access in your browser for geolocation features
3. **Build Errors**: Ensure you have Node.js installed for the build process

### Testing the App

1. Test with different cities
2. Try the geolocation feature
3. Check responsiveness on mobile devices
4. Verify the 16-day forecast displays correctly

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --card-background: rgba(255, 255, 255, 0.1);
    --text-color: white;
}
```

### Adding More Weather Data
Extend the API calls in `script.js` to include additional OpenWeatherMap endpoints like air pollution or UV index.

## Support

For issues with:
- **OpenWeatherMap API**: Check their [documentation](https://openweathermap.org/api)
- **Netlify Deployment**: Visit [Netlify docs](https://docs.netlify.com/)
- **App Issues**: Check browser console for error messages

## License

MIT License - feel free to use this project for personal or commercial purposes.

---

**Enjoy your new weather app! 🌤️**
