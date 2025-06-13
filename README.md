# 🛡️ VulnScanner – Escáner de Vulnerabilidades Básico

VulnScanner es una herramienta desarrollada con Node.js que permite escanear puertos y analizar encabezados HTTP de un dominio o IP. Diseñada como parte de mi portfolio orientado a ciberseguridad ofensiva y análisis básico de superficie de ataque.

---

## ⚙️ Tecnologías utilizadas

- **Node.js + Express** – Servidor y lógica backend
- **Net** – Escaneo de puertos TCP comunes
- **Axios** – Solicitudes HTTP para analizar headers
- **Tailwind CSS** – Interfaz simple, responsiva y dark mode
- **HTML + JS** – Frontend liviano para visualización de resultados

---

## 🧪 Funcionalidades

- ✅ Escaneo de puertos más comunes (21, 22, 80, 443, etc.)
- ✅ Análisis de headers HTTP inseguros (ej. falta de CSP, `X-Powered-By`, etc.)
- ✅ API REST + interfaz web integrada
- ✅ Respuesta en tiempo real en formato JSON
- 🌑 Interfaz minimalista con modo oscuro (usando Tailwind)

---

## 📦 Instalación

```bash
git clone https://github.com/romanvalles01/vuln-scanner.git
cd vuln-scanner
npm install

🚀 Uso

1. node index.js
2. Luego ingresá a http://localhost:3000 y escribí un dominio para analizar.

También podés probar la API desde Postman o cURL:

curl -X POST http://localhost:3000/scan \
  -H "Content-Type: application/json" \
  -d '{"target": "github.com"}'

*Esta herramienta fue creada con fines educativos y no debe utilizarse para actividades no autorizadas.
