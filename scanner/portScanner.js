const net = require("net");

const commonPorts = [21, 22, 23, 25, 53, 80, 110, 139, 143, 443, 445, 3306];

function scanPort(host, port, timeout = 200) {
  return new Promise((resolve) => {
    const socket = new net.Socket();

    socket.setTimeout(timeout);
    socket.once("connect", () => {
      socket.destroy();
      resolve({ port, status: "open" });
    });

    socket.once("timeout", () => {
      socket.destroy();
      resolve({ port, status: "closed" });
    });

    socket.once("error", () => {
      resolve({ port, status: "closed" });
    });

    socket.connect(port, host);
  });
}

async function scanPorts(host) {
  const results = await Promise.all(
    commonPorts.map((port) => scanPort(host, port))
  );
  return results;
}

module.exports = { scanPorts };
