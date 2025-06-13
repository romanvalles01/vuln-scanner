const express = require("express");
const path = require("path");
const { scanPorts } = require("./scanner/portScanner");
const { scanHeaders } = require("./scanner/headerScanner");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.post("/scan", async (req, res) => {
  const { target } = req.body;

  if (!target)
    return res.status(400).json({ error: "Falta el parámetro target" });

  const ports = await scanPorts(target);
  const headers = await scanHeaders(target);

  res.json({ target, ports, headers });
});

app.listen(3000, () => {
  console.log("🔎 VulnScanner escuchando en http://localhost:3000");
});
