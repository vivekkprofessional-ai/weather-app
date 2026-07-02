# 🌤️ SkyPulse — Weather Dashboard

SkyPulse is a premium, modern weather dashboard designed with rich glassmorphism aesthetics, fluid micro-animations, and a highly responsive layout. It features real-time forecasts, air quality analytics, temperature sparklines, and interactive map integration.

---

## 📌 Features

- **Premium UI/UX:** Styled using a sleek dark mode, custom harmony gradients, and frosted glass cards (`backdrop-filter`).
- **Interactive Search:** Dynamic search capability supporting city names, latitude/longitude coordinates, or automatic IP-based lookups (`auto:ip`).
- **Live Location Map:** OpenStreetMap integration displaying a localized view of the searched coordinates.
- **Hourly Forecast:** A dynamic vector-drawn SVG sparkline detailing the temperature fluctuations over the next 12 hours.
- **8-Day Outlook:** Structured daily forecast view listing weather conditions, daily highs, and lows.
- **Air Quality Analytics:** Custom EPA index indicator matching PM2.5 details with color-coded safety metrics.
- **Vercel Serverless Ready:** Seamless configuration for serverless deployment, shielding secret API keys from the client-side.

---

## 📂 Project Structure

```
├─ api/
│  └─ weather.js           # Serverless endpoint handler
├─ public/
│  ├─ index.html           # Main frontend (SkyPulse Dashboard)
│  └─ screenshot.png       # Interface preview
├─ .env                    # Local environment variables
├─ server.js               # Node.js Express server
├─ package.json            # Configuration and script definitions
├─ .gitignore
└─ README.md
```

---

## 🚀 How It Works

1. The user inputs a query or selects automatic geolocation.
2. The client fetches the backend route: `/api/weather?q={city}&days=8`.
3. The server/function proxy handles request fetching securely, utilizing the private API key.
4. Clean JSON payloads are served back containing the current state, forecast array, air quality numbers, and active meteorology alerts.
5. The UI dynamically populates SVG sparklines, metrics grids, OpenStreetMap frames, and alert templates.

---

## 🛠️ Local Development

### 1. Install Dependencies
Run the install command inside the project directory:
```bash
npm install
```

### 2. Configure Environment Variables
Create a file named `.env` in the root of the project:
```env
WEATHER_API_KEY=your_weatherapi_key_here
PORT=3000
```

### 3. Run the Server
Start the local server by running:
```bash
npm start
```
Your local server will spin up, usually on [http://localhost:3000](http://localhost:3000).

---

## ⚡ API Cache & Performance
- API queries utilize custom Cache-Control headers to optimize responses and minimize API traffic:
  ```http
  Cache-Control: s-maxage=60, stale-while-revalidate=120
  ```

---

## 📜 License
Licensed under the MIT License. Feel free to use and adapt this project as needed.
