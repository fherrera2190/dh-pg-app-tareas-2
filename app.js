console.clear();
const moduloFuncionesDeTareas = require('./modulos/funcionesDeTareas.js')
const argv = require('process').argv;
require('colors');
const accion = argv[2] === undefined ? undefined : argv[2].toLowerCase();
switch (accion) {
    case 'listar':
        console.log('------------------\nListado de tareas\n------------------'.green);
        moduloFuncionesDeTareas.listar();
        console.log();
        break;
    case 'crear':
        console.log(moduloFuncionesDeTareas.crear(argv[3]));
        break;
    case 'filtrar':
        moduloFuncionesDeTareas.filtrarPorEstado(argv[3]);

        break;
    case 'modificar':
        moduloFuncionesDeTareas.modificarEstado(+argv[3], argv[4]);
        break;
    case (undefined):
        console.log('------------------------------------\nAtención - Tienes que pasarme una acción\nLas acciones disponibles son: listar,crear, filtrar\n----------------------------------------'.yellow);
        break;
    default:
        console.log('------------------------------------\nNo entiendo qué quieres hacer\nLas acciones disponibles son: listar,crear, filtrar\n------------------------------------'.red);
        break;
}