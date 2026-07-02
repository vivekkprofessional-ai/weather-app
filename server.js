require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;
const KEY = process.env.WEATHER_API_KEY;
if(!KEY){ console.error('Set WEATHER_API_KEY before running'); process.exit(1) }
app.get('/api/weather', async (req,res)=>{
  try{
    const q = req.query.q || 'London';
    const days = req.query.days || 8;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${encodeURIComponent(KEY)}&q=${encodeURIComponent(q)}&days=${days}&aqi=yes&alerts=yes`;
    const apiRes = await fetch(url);
    const text = await apiRes.text();
    res.status(apiRes.status).type('application/json').send(text);
  }catch(e){ console.error(e); res.status(500).json({error:'internal'}) }
});
app.use(express.static('public'));
app.listen(PORT,()=>console.log(`local server http://localhost:${PORT}`));
