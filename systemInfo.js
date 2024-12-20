const osModule = require('./osModule');
const networkModule = require('./networkModule');

const osInfo = osModule.getOSInfo();
console.log('Información del Sistema Operativo:');
console.log(`Nombre: ${osInfo.nombre}`);
console.log(`Tipo: ${osInfo.tipo}`);
console.log(`Versión: ${osInfo.version}`);
console.log(`Arquitectura: ${osInfo.arquitectura}`);
console.log(`CPUs: ${osInfo.cpus}`);
console.log(`Memoria Total: ${osInfo.memoriaTotal}`);
console.log(`Memoria Libre: ${osInfo.memoriaLibre}`);
console.log('------------------------------');

const networkInfo = networkModule.getNetworkInfo();
console.log('Información de las Interfaces de Red:');
for (const iface in networkInfo) {
    console.log(`Interfaz ${iface}:`);
    networkInfo[iface].forEach((net) => {
        console.log(`  Familia: ${net.familia}`);
        console.log(`  Dirección: ${net.direccion}`);
        console.log(`  Interno: ${net.interno}`);
    });
}
