# 🌦️ Responsive Weather App

A responsive web application built with **React** (Vite) that fetches and displays weather data from the **OpenWeatherMap API**.  
The app allows users to search weather by **city name** or use **browser geolocation** to get the current weather for their location.  

---

## 🚀 Features
- Search by city name.
- Get current location weather using browser geolocation.
- Display:
  - Current temperature (°C/°F)
  - Weather description
  - Humidity
  - Wind speed
  - Weather icon from OpenWeatherMap
- Responsive design for mobile, tablet, and desktop.
- Environment variable for API key security.

---

## 🛠️ Tech Stack
- **React** (with Vite)
- **JavaScript (ES6+)**
- **CSS3** (Responsive Design)
- **OpenWeatherMap API**

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/yourusername/weather-app.git
cd weather-app

2️⃣ Install dependencies
npm install

3️⃣ Get your OpenWeatherMap API key
Sign up at https://openweathermap.org/api
Copy your API key from your dashboard.

4️⃣ Create .env file in the project root
VITE_OPENWEATHERMAP_KEY=your_api_key_here

5️⃣ Start the development server
npm run dev
The app will be available at:
👉 http://localhost:5173/

📂 Project Structure
bash
Copy
Edit
weather-app/
├── public/
├── src/
│   ├── App.jsx        # Main React component
│   ├── main.jsx       # Entry point
│   ├── styles.css     # Styling (responsive)
│   └── components/    # (Optional) separate UI components
├── .env               # API key (not committed to GitHub)
├── package.json
└── README.md
🔗 API Reference
We are using the OpenWeatherMap Current Weather Data API:

Example endpoint:

https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
Replace q with the city name.

Replace appid with your API key.

Use units=metric for Celsius or units=imperial for Fahrenheit.

Weather icons are fetched from:

https://openweathermap.org/img/wn/{icon}@2x.png
Where {icon} comes from the API response.

📱 Responsive Design
Mobile-first approach.

Adjusts layout for tablets and desktops using media queries.

⚠️ Notes
Keep your .env file private — do not commit it to GitHub.

Free API tier has rate limits — avoid unnecessary requests.

For production, consider setting up a small backend to hide your API key.


