console.clear();
const { leerJSON, escribirJSON } = require('../data');

module.exports = {
    tareas: leerJSON(),
    listar: function () {
        console.log('Listado de tareas\n-----------------');
        this.tareas.forEach(({ titulo, estado }, i) => {
            console.log(`${i + 1}. ${titulo} - ${estado}`)
        });
    }
}