/*ESCRIBE 'node todo.js --help' EN EL TERMINAL 
PARA VER LOS COMANDOS DISPONIBLES*/

const dotenv = require("dotenv").config();
const parseISO = require("date-fns/parseISO");
const fs = require("fs-extra");
const path = require("path");
const minimist = require("minimist");
const format = require("date-fns/format");
const locale = require("date-fns/locale");
const chalk = require("chalk");
const homedir = require('os').homedir();
const todoPath = path.join(homedir, '.tasks.json')
let {_ , priority, done, undone, list, clean, reset, help, clear} = minimist(process.argv.slice(2));
let envlang = dotenv.parsed.LANG;

//comprobar si existe .tasks.json
async function comprobarLista() {
  try {
    if (!fs.existsSync(todoPath)) {
      const lista = { "tasks": [] };
      fs.writeFile(todoPath, JSON.stringify(lista));
      return lista;
    } else {
      const lista = require(todoPath);
      return lista;
    }
  } catch (error) {
    console.log(error);
  }
};

//buildear el mensaje
function buildMessage() {
  let message = _.join(" ");
  const fecha = new Date;
  if (priority) {
    priority = 'alta'
  } else {
    priority = 'normal'
  }
  const TaskMessage = { message, fecha, priority, done};
  buildArray(TaskMessage);
  console.log(`Añadida la tarea "${message}"!`);
};

//juntar con los demas mensajes
async function buildArray(message) {
  let listaActualizada = await comprobarLista();
  listaActualizada.tasks.unshift(message);
  listaActualizada.LastUpdate = message.fecha;
  fs.writeFile(todoPath, JSON.stringify(listaActualizada));
};

/*llenar los que queremos printear de espacios para embellecer el
  fondo de la tabla*/
function buildTable(str) {
  if (str.length < 46) {
  for (let i = 0; 46 - str.length; i++) {
    str = str + ' ';
  }
}
  return str;
};

//Borra todo el JSON para limpiar la lista con --reset
function resetJSON() {
  const lista = { "tasks": [] };
  fs.writeFile(todoPath, JSON.stringify(lista));
  console.log('La lista ha sido borrada!');
};


//Imprime toda la ayuda con --help
function helpMe() {
  console.log(`Ayuda:
    Escribe cualquier cosa despues de "node todo.js" para añadir algo a tu lista.
    Comandos admitidos:
    --priority (añade prioridad alta al texto que introduzcas)
    --list (ver la lista de ToDos)
    --done (marcar como hecha una tarea)
    --undone (desmarcar una tarea que estaba hecha)
    --clean (limpiar la lista borrando las tareas hechas)
    --help (acceder a este menu de ayuda)
    --reset (borra toda la lista)
    `)
};


//Funcion encargada de imprimir la lista en la consola con colores
async function printTodos() {
  let listaActualizada = await comprobarLista();
  console.log(
    chalk.black(
    chalk.bgWhiteBright(
      ' ##############  TO DO LIST!!  ############## ')));
  console.log(
    chalk.black(
      chalk.bgWhiteBright('  ------------------------------------------  ')));
  for (const tarea in listaActualizada.tasks) {
      const fechaFormateada = format(
        parseISO(listaActualizada.tasks[tarea].fecha),
        "d 'de' MMMM 'del' yyyy 'a las' H:mm",
        {
          locale: locale[envlang],
        }
      );
    console.log(
      chalk.bgGray(
        buildTable(
          `Tarea ${parseInt(tarea, 10) + 1}: ` + listaActualizada.tasks[tarea].message)));
    console.log(
      chalk.bgGray(
        'Añadida el: ' + fechaFormateada + '  '));
    if (listaActualizada.tasks[tarea].priority === 'alta') {
      console.log(
        chalk.bgRed(
          buildTable(
            `Prioridad: ` + listaActualizada.tasks[tarea].priority)))
    } else {
      console.log(
        chalk.bgGray(
          buildTable(
            `Prioridad: ` + listaActualizada.tasks[tarea].priority)));
    }
    if (listaActualizada.tasks[tarea].done) {
      console.log(chalk.bgGray(
        buildTable(`Done! ✔️ `) + ' '));
    }
    console.log(
      chalk.black(
        chalk.bgWhiteBright('  ------------------------------------------  ')));
  }
  if (listaActualizada.LastUpdate) {
  const fechaFormateada = format(
    parseISO(listaActualizada.LastUpdate),
    "d 'de' MMMM 'del' yyyy 'a las' H:mm",
    {
      locale: locale[envlang],
    }
  );
  console.log(
    chalk.bgBlack(
      buildTable(`Actualizado:  ` + fechaFormateada)
    )
  );
} else {
  console.log(
    chalk.bgBlack(
      buildTable(` Lista vacía: no existe última actualización`)
    )
  );
}
}

//Marcar Done y Desmarcar Done
async function makeDone(num, param) {
  try {
      let listaActualizada = await comprobarLista();
      if (num<=0 || num>=listaActualizada.tasks.length + 1) {
      console.log(`Esa tarea no existe!! 
Te has pasado de largo o te has quedado corto?
(Recuerda que las tareas empiezan por el numero 1!)`);
      return;
      }
      listaActualizada.tasks[num - 1].done = param;
      listaActualizada.LastUpdate = new Date();
      fs.writeFile(todoPath, JSON.stringify(listaActualizada));
      console.log(`Se ha cambiado el estado de la tarea!
Puedes comprobarlo con node todo.js --list`);
    } catch (error) {
      console.log(error);
  }
};

//Limpiar los TODOs marcados como Done
async function cleanList() {
  let listaActualizada = await comprobarLista();
  for (let i = listaActualizada.tasks.length - 1; i > -1; i = i - 1) {
    if (listaActualizada.tasks[i].done === true) {
      listaActualizada.tasks.splice(i, 1);
    }
  }
  listaActualizada.LastUpdate = new Date;
  fs.writeFile(todoPath, JSON.stringify(listaActualizada));
  console.log('Borradas las tareas hechas!');
};


//Checkeador de atributos
if (list) {
  printTodos();
  } else if(done || done === 0) {
      makeDone(done, true);
  } else if (undone || undone === 0) {
    makeDone(undone, false);
  } else if (clean || clear) {
    cleanList();
  } else if (reset){
    resetJSON();
  } else if (help){
    helpMe();
  } else {
    buildMessage();
};