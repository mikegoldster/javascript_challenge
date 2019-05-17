var tableData = Object.keys(data);
let table = document.getElementById("ufo-table");

var dallas = ["1/28/1996", "dallas", "tx", "us", "star","5 mins","Cowboys win a superbowl, that's alien!."];
data.splice(2,0,dallas);

generateTable(table, data); // generate the table first

function generateTableHead(table, tableData) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of tableData) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, tableData) {
  for (let element of tableData) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

// TABLE FILTER FUNCTION

function filterTo(input, table) {
var tr = document.getElementById(table).getElementsByTagName('tr');
for (var i = 1; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName('td');
    var hide = true;
    for (var j=0; j<td.length; j++) {
        if (td[j].innerHTML.toUpperCase().indexOf(input.toUpperCase()) > -1) { hide=false; break }
    }
    tr[i].style.display = hide ? 'none' : '';
} }
