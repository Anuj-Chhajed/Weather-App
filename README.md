# 🌤️ Weather Forecast App
Instant Global Weather Insights at Your Fingertips. A fast, beautiful, and responsive web application to track real-time conditions and forecasts for any city in the world.

## 🌟 The Problem
Checking the weather shouldn't require navigating cluttered interfaces full of intrusive ads or slow-loading pages. Users often just need a quick, reliable, and visually pleasing way to check current conditions, local time, and upcoming forecasts for a specific location.

This Weather App bridges that gap. By combining a clean, glass-morphism UI with lightning-fast data fetching, it provides users with a seamless, straightforward way to prepare for their day, no matter where they are.

## 🚀 What It Can Do

**🌍 Global City Search**
Easily search for any city worldwide. The app instantly retrieves and displays the correct location data, including country and specific timezone.

**🌡️ Real-Time In-Depth Metrics**
Go beyond just the temperature. Get instant access to current conditions, "feels like" temperature, 💧 humidity levels, 💨 wind speed (kph), and 🔆 UV Index.

**📅 3-Day Future Forecast**
Prepare for the week ahead with a clean, grid-based 3-day forecast that highlights the upcoming maximum and minimum temperatures alongside expected weather conditions.

**🕒 Local Time Integration**
Automatically calculates and beautifully formats the exact local time and date for the searched city, avoiding any timezone confusion.

## 🛠️ The Tech Stack

| Layer | Technology | Why? |
| :--- | :--- | :--- |
| **Frontend** | React 19 | For a fast, component-based, and modern user interface. |
| **Build Tool** | Vite | Provides lightning-fast Hot Module Replacement (HMR) and optimized builds. |
| **Styling** | Vanilla CSS | Custom, lightweight styling to implement a modern "glass-morphism" aesthetic without heavy libraries. |
| **Date Parsing** | Day.js | A minimalist, highly efficient library used to parse, validate, and format local times and timezones. |
| **Data Source** | WeatherAPI | A reliable and comprehensive REST API for fetching live weather and multi-day forecasts. |

## 🧠 How It Works (Simple Steps)

1. **🔍 Search:** The user types a city name into the search bar and hits 'Enter' or clicks search.
2. **📡 Fetch:** The app securely communicates with the WeatherAPI endpoint, requesting 3 days of forecast data alongside current air quality and alerts.
3. **⚙️ Process:** The application parses the JSON response, handles potential errors (like typos in city names), and formats the date/time using `dayjs`.
4. **📊 Display:** The UI updates instantly with a beautiful card displaying the temperature, specific weather icons, detailed metrics, and the upcoming forecast.

## 🗂️ Project Architecture

The project is structured to be lightweight and easy to navigate, separating global styles from component logic:

```text
weather-app/
 ├── public/
 │    └── vite.svg           # Static assets
 ├── src/
 │    ├── assets/            # Local images and icons
 │    ├── App.jsx            # Main React component containing state and API logic
 │    ├── App.css            # Component-specific styling (glass-morphism UI)
 │    ├── index.css          # Global resets and base typography
 │    └── main.jsx           # React DOM rendering entry point
 ├── vite.config.js          # Vite build configuration
 └── package.json            # Dependencies (React, Day.js)
