function leeArchivo(file) {
//   var cuerpo = document.getElementsByTagName("body")[0];
   var titulos = [];
   var articulo = document.getElementById("paginas");
   var archivo = new XMLHttpRequest();
   archivo.open("GET", file, false);
   archivo.onreadystatechange = function () {
      if(archivo.readyState === 4) {
         if(archivo.status === 200 || archivo.status == 0) {
            var Texto = archivo.responseText;
            var lineas = Texto.split('\n');
            var mcat, msub, mcatx, msubx;
//            debugger;
            for(var linea of lineas) {
               var items = linea.split(',');
               mcat = items[0];
               msub = items[1];
               if (mcat !== mcatx) {
                  // Guarda las categorias en la matriz "titulos"
                  // crea una nueva tabla y el tbody
                  var tabla = document.createElement("table");
                  tabla.setAttribute("border","2")
                  tabla.setAttribute("bgcolor","gray")
//                  tabla.align = "center";
                  var tblCuerpo = document.createElement("tbody");
                  // crea una hilera en la tabla
                  var hilera = document.createElement("tr");
                  // crea un elemento td y un nodo de texto 
                  var celda = document.createElement("th");
                  celda.setAttribute("colspan","3");
                  var textoCelda = document.createTextNode(items[0]);
                  celda.setAttribute("id",items[0]);
//                  var textoCelda2 = document.createTextNode(items[1]);
                  // ubica el texto al final de la hilera
                  celda.appendChild(textoCelda);
//                  celda.appendChild(textoCelda2);
                  hilera.appendChild(celda);
                  // agrega la hilera al final de la tabla (o tbody)
                  tblCuerpo.appendChild(hilera);
                  // posiciona el tblCuerpo debajo del elemento Table
                  tabla.appendChild(tblCuerpo);
                  // adiciona tabla dentro de body
                  //cuerpo.appendChild(tabla);
                  articulo.appendChild(tabla);
                  // modifica el atributo "border" de la tabla en 2
                  //tblCuerpo.setAttribute("border","2");
               } 
               if (msub!==msubx) {
                  titulos.push(mcat+'/'+msub);
                  row = tabla.appendChild(document.createElement("th"));
                  row.innerHTML = items[1];
                  row.setAttribute("id",items[0]+items[1]);
                  row.setAttribute("class","sublinea");
                  row.setAttribute("colspan","3");
                  if (mcat!==mcatx) {
                     rowtit = tabla.appendChild(document.createElement("tr"));
                     tit = rowtit.appendChild(document.createElement("td"));
                     tit.innerHTML = "Dominio";
                     tit = rowtit.appendChild(document.createElement("td"));
                     tit.innerHTML = "Descripción";
                     tit = rowtit.appendChild(document.createElement("td"));
                     tit.innerHTML = "Detalle";
                  }
               }
               row = tabla.appendChild(document.createElement("tr"));
//               row.appendChild(document.createElement("td")).innerText = items[0];
//               row.appendChild(document.createElement("td")).innerText = items[1];
               row.innerHTML = '<td><a href="'+items[3]+'" target="_blank">'+items[2]+'</a></td>'
//             Esta linea no deja ver el link sino que la muestra como si fuera texto
//               row.appendChild(document.createElement("td")).innerText = '<a href="'+items[3]+'" target="_blank">'+items[2]+'</a>'
               row.appendChild(document.createElement("td")).innerText = items[4]
               row.appendChild(document.createElement("td")).innerText = items[5]
               mcatx = mcat;
               msubx = msub;
            }
            var ind = document.getElementById("mindice");
            mcatx = '';
            for (const i in titulos) {
               var mtit = titulos[i].split('/');
               if (mtit[0] !== mcatx) {
                  lis = ind.appendChild(document.createElement("li"));
//                  lis.innerHTML = '<a href="#'+titulos[i]+'">'+titulos[i]+'</a>';
                  lis.innerHTML = '<a href="#'+mtit[0]+'">'+mtit[0]+'</a>';
                  lis.setAttribute("class","acordion");
               }
               lis = ind.appendChild(document.createElement("li"));
               lis.innerHTML = '<a href="#'+mtit[0]+mtit[1]+'">'+mtit[1]+'</a>';
               lis.setAttribute("class","opciones");
               lis.setAttribute("color","blue");
               mcatx = mtit[0]
            }
         }
      }
   }
   archivo.send(null);
}
