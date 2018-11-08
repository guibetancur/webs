function leeArchivo(file) {
   var tabla =  document.getElementById("tabla1");
   var archivo = new XMLHttpRequest();
   archivo.open("GET", file, false);
   archivo.onreadystatechange = function () {
      if(archivo.readyState === 4) {
         if(archivo.status === 200 || archivo.status == 0) {
            var Texto = archivo.responseText;
            var lineas = Texto.split('\n');
//            document.write("<table>");
//            var mcat, msub, mcatx, msubx;
            for(var linea of lineas) {
//               document.write("<tr>");
               var items = linea.split(',');
/*
               mcat = items[0];
               msub = items[1];
               if (mcat !== mcatx) {
                  document.write(items[0]);
                  var tbl = document.createElement("table");
                  tbl.setAttribute("class", mcat);
                  thead = tbl.appendChild(document.createElement("thead"));
                  thRow = thead.appendChild(document.createElement("tr"));
               }
*/
/*               // Create an empty <tr> element and add it to the 1st position of the table:
               var row = tabla.insertRow(0);
               // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
               var cell1 = row.insertCell(0);
               var cell2 = row.insertCell(1);
               var cell3 = row.insertCell(2);
               // Add some text to the new cells:
               cell1.innerHTML = '<a href="'+items[1]+'"target="_blank">'+items[0]+'</a>';
               cell2.innerHTML = items[2]; 
               cell3.innerHTML = items[3]; 
*/
               row = tabla.appendChild(document.createElement("tr"));
               row.appendChild(document.createElement("td")).innerText = items[0];
               row.appendChild(document.createElement("td")).innerText = items[1];
               row.innerHTML = '<td><a href="'+items[3]+'" target="_blank">'+items[2]+'</a></td>'
//             Esta linea no deja ver el link sino que la muestra como si fuera texto
//               row.appendChild(document.createElement("td")).innerText = '<a href="'+items[3]+'" target="_blank">'+items[2]+'</a>'
               row.appendChild(document.createElement("td")).innerText = items[4]
               row.appendChild(document.createElement("td")).innerText = items[5]
//               tabla.innerHTML += '<tr>'
//               tabla.innerHTML += '<td><a href="'+items[1]+'"target="_blank">'+items[0]+'</a></td>'
//               tabla.innerHTML += '<td>'+items[2]+'</td>'
//               tabla.innerHTML += '<td>'+items[3]+'</td>'
//               tabla.innerHTML += '</tr>'
//               document.write('<td><a href="'+items[1]+'"target="_blank">'+items[0]+'</a></td>');
//               document.write("<td>"+items[2]+"</td>");
//               document.write("<td>"+items[3]+"</td>");
//               document.write("</tr>");
//               mcatx = mcat;
//               msubx = msub;
            }
//            document.write("</table>");
         }
      }
   }
   archivo.send(null);
}