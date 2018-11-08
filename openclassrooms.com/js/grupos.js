function leeArchivo(file) {
   var cuerpo = document.getElementsByTagName("body")[0];
//   var archivo = new XMLHttpRequest();
   var archivo = new FileReader();
   debugger;
// Otra forma de Cargar archivo de texto usando AJAX
/*
fetch('/res/texto.txt')
  .then(res => res.text())
  .then(content => {
    let lines = content.split(/\n/);
    lines.forEach(line => console.log(line));
  });
*/
// otra forma...

   archivo.open("GET", file, false);
   archivo.onreadystatechange = function () {
      if(archivo.DONE === 2) {
         if(archivo.EMPTY !== 0 || archivo.EMPTY !== 0) {
            var Texto = archivo.responseText;
            var lineas = Texto.split('\n');
            var mcat, msub, mcatx, msubx
            for(var linea of lineas) {
               var items = linea.split(',');
               mcat = items[0];
               msub = items[1];
               if (mcat !== mcatx) {
                  var tabla   = document.createElement("table");
                  var tblCuerpo = document.createElement("tbody");
                  var hilera = document.createElement("tr");
                  var celda = document.createElement("td");
                  var textoCelda = document.createTextNode(mcat);
                  celda.appendChild(textoCelda);
                  var celda = document.createElement("td");
                  var textoCelda = document.createTextNode(msub);
                  celda.appendChild(textoCelda);
//                  var hilera = document.createElement("tr");
//                  tbl.setAttribute("class", mcat); crea una clase con el nombre para indice (puede ser)
//                  thead = tbl.appendChild(document.createElement("thead"));
//                  thRow = thead.appendChild(document.createElement("tr"));
               }
               var celda = document.createElement("td");
               var textoCelda = document.createTextNode('<td><a href="'+items[3]+'" target="_blank">'+items[2]+'</a></td>');
               celda.appendChild(textoCelda);
               var celda = document.createElement("td");
               var textoCelda = document.createTextNode(items[4]);
               celda.appendChild(textoCelda);
               var celda = document.createElement("td");
               var textoCelda = document.createTextNode(items[5]);
               celda.appendChild(textoCelda);
               hilera.appendChild(celda);
            }
//            document.write("</table>");
         }
      }
   }
   archivo.send(null);
}

function creaTabla() {
  // Obtener la referencia del elemento body
  var cuerpo = document.getElementsByTagName("body")[0];
 
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  var tblCuerpo = document.createElement("tbody");
 
  // Crea las celdas
  for (var i = 0; i < 2; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
 
    for (var j = 0; j < 2; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
 
    // agrega la hilera al final de la tabla (al final del elemento tblCuerpo)
    tblCuerpo.appendChild(hilera);
  }
 
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblCuerpo);
  // appends <table> into <body>
  cuerpo.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}