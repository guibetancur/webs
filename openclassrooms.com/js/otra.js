function creatabla() {
   // now do the same thing, but using appendChild
   var byChildTable = document.createElement("table");
   byChildTable.setAttribute("class", "table");
   thead = byChildTable.appendChild(document.createElement("thead"));
   thRow = thead.appendChild(document.createElement("tr"));

   // create table header
   thRow.appendChild(document.createElement("td")).innerText = "#";
   for (var i = 0, l = keys.length; i < l; i ++) {
       var key = keys[i];
       thRow.appendChild(document.createElement("td")).innerText = key;
   }

   // insert table data by row
   tbody = byChildTable.appendChild(document.createElement("tbody"));
   for (var i = 0, l = data.length; i < l; i ++) {
       var rowData = data[i],
           row = tbody.appendChild(document.createElement("tr"));
       row.appendChild(document.createElement("td")).innerText = i;
       for (var j = 0, l = keys.length; j < l; j ++) {
           var elem = rowData[keys[j]];
           row.appendChild(document.createElement("td")).innerText = elem;
       }
   }
 }