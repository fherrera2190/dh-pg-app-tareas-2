console.clear();
const moduloFuncionesDeTareas = require('./modulos/funcionesDeTareas.js')
const argv = require('process').argv;
const accion = argv[2] === undefined ? undefined : argv[2].toLocaleLowerCase();

switch (accion) {
    case 'listar':
        console.log('Listado de tareas\n------------------');
        moduloFuncionesDeTareas.listar();
        //console.log(moduloFuncionesDeTareas.buscar('Repasar JS'));
        break;
    case 'crear':
        console.log(moduloFuncionesDeTareas.crear(argv[3]));
        break;
    case 'filtrar':
        console.log('Tareas ' + argv[3]);
        moduloFuncionesDeTareas.filtrarPorEstado(argv[3]);
        break;
    case (undefined):
        console.log();
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;
    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar,crear, filtrar');
        console.log('------------------------------------');
        break;
}