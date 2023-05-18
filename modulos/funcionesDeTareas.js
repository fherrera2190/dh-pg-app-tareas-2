console.clear();
const { leerJSON, escribirJSON } = require('../data');
const Tarea = require('./Tarea')


module.exports = {
    tareas: leerJSON(),
    listar: function (tareas = this.tareas) {
        tareas.forEach(({ titulo, estado }, i) => {
            console.log(`${i + 1}. ${titulo} - ${estado}`)
        });
    },
    buscar: function (titulo) {
        return this.tareas.find((tarea) => tarea.titulo === titulo);
    },
    crear: function (titulo) {
        let busqueda = this.buscar(titulo);
        if (busqueda) {
            return `No se puede crear la tarea por que ya existe\n`
        } else {
            const nuevaTarea = new Tarea(titulo);
            this.tareas.push(nuevaTarea);
            escribirJSON(this.tareas);
            console.log('Nueva tarea creada\n------------------');
            return `${nuevaTarea.titulo} - ${nuevaTarea.estado}\n`;
        }
    },
    filtrarPorEstado: function (estado) {
        this.tareas.filter((tarea, index) => {
            if (tarea.estado === estado) {
                console.log(index + 1 + ". " + tarea.titulo);
            }
        });
    },
}