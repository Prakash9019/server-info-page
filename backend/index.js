const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Data
const serverInfo = {
  serverName: "! RC3-BASEMAPS",
  location: "Crouching Lands - Loading Data",
  ping: "104ms",
  tickRate: "60 Hz",
  players: "60/64",
  settings: {
    region: "europe - de",
    punkbuster: "on",
    fairfight: "on",
    password: "off",
    preset: "normal",
  },
  advanced: { "minimap": "on", "only Squad Leader Spawn": "off", "vehicles": "on", "team Balance": "on", "minimap Spotting": "on", "hud": "on", "3pVehicleCam": "on", "regenerativeHealth": "on", "killCam": "on", "friendlyFire": "off", "3dSpotting": "on", "enemyNameTags": "on" },
  rules: { "tickets": 400, "vehicleSpawnDelay": 25, "bulletDamage": 100, "kickAfterTeamKills": 5, "playerHealth": 100, "player RespawnTime": 100, "kickAfterIdle": 300, "banAfterKicks": 3 }
};

// API Endpoints
app.get("/api/server-info", (req, res) => {
  res.status(200).json(serverInfo);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
