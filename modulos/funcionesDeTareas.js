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
    buscar: function (parametro, tipo) {
        switch (tipo) {
            case 'number':
                return this.tareas.find((tarea, index) => {
                    index + 1 === parametro
                });
            case 'titulo':
                return this.tareas.find((tarea) => tarea.titulo.toLowerCase() === parametro.toLowerCase());
            case 'estado':
                return this.tareas.find((tarea, index) => index + 1 === parametro);
        }
    },
    crear: function (titulo) {
        const busqueda = this.buscar(titulo, 'titulo');
        if (busqueda) {
            return `No se puede crear la tarea por que ya existe\n`.red
        } else {
            const nuevaTarea = new Tarea(titulo);
            this.tareas.push(nuevaTarea);
            escribirJSON(this.tareas);
            console.log('------------------\nNueva tarea creada\n------------------'.green);
            return `${nuevaTarea.titulo} - ${nuevaTarea.estado}\n`;
        }
    },
    filtrarPorEstado: function (estado) {
        const resultado = this.tareas.filter((tarea, index) => {
            if (tarea.estado === estado) {
                console.log(index + 1 + ". " + tarea.titulo);
            }
        });
    },
    modificarEstado: function (numeroTarea, nuevoEstado) {
        const busqueda = this.buscar(numeroTarea, 'estado');
        if (busqueda.estado.toLowerCase() !== nuevoEstado.toLowerCase()) {
            busqueda.estado = nuevoEstado;
            escribirJSON(this.tareas);
            this.listar();
        }
    },
}