console.clear();
const moduloFuncionesDeTareas = require('./modulos/funcionesDeTareas.js')
const argv = require('process').argv;
const accion = argv[2] === undefined ? undefined : argv[2].toLocaleLowerCase();

switch (accion) {
    case 'listar':
        moduloFuncionesDeTareas.listar();
        break;
    case (undefined):
        console.log('Atención - Tienes que pasar una accion')
        break;
    default:
        console.log('------------------------------------\nNo entiendo que quieres hacer\nLas acciones disponibles son: Listar\n------------------------------------')
        break;
}