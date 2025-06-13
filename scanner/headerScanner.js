const axios = require("axios");

async function scanHeaders(host) {
  try {
    const response = await axios.get(`http://${host}`, { timeout: 3000 });

    const headers = response.headers;

    return {
      poweredBy: headers["x-powered-by"] || "No informado",
      contentSecurityPolicy: headers["content-security-policy"]
        ? "Presente"
        : "Ausente",
      server: headers["server"] || "No informado",
    };
  } catch (err) {
    return { error: "No se pudo obtener respuesta HTTP" };
  }
}

module.exports = { scanHeaders };
