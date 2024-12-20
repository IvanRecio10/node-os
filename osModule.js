const os = require('node:os');

function getOSInfo() {
    const totalMemMB = (os.totalmem() / (1024 * 1024)).toFixed(2);
    const freeMemMB = (os.freemem() / (1024 * 1024)).toFixed(2);

    return {
        nombre: os.platform(),
        tipo: os.type(),
        version: os.version(),
        arquitectura: os.arch(),
        cpus: os.cpus().length,
        memoriaTotal: `${totalMemMB} MB`,
        memoriaLibre: `${freeMemMB} MB`
    };
}

module.exports = {
    getOSInfo
};
