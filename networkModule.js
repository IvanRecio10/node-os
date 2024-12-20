const os = require('node:os');

function getNetworkInfo() {
    const interfaces = os.networkInterfaces();
    const networkInfo = {};

    for (const iface in interfaces) {
        networkInfo[iface] = interfaces[iface].map((net) => ({
            familia: net.family,
            direccion: net.address,
            interno: net.internal
        }));
    }

    return networkInfo;
}

module.exports = {
    getNetworkInfo
};
