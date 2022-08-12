

var httpRequest;



function makeRequest() {
  var url = 'https://reqres.in/api/users?page=1';
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Cannot create an XMLHTTP instance');
    return false;
  }

  httpRequest.onreadystatechange = showContents;

  httpRequest.open('GET', url, true);
  httpRequest.send();
}

function showContents() {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      var jsObj = JSON.parse(httpRequest.responseText);

      console.log('jsObj', jsObj); //for debugging

      let table = document.createElement('table');
      table.setAttribute('id', 'table-1');

      let topRow = createTextRow([
        'ID',
        'First Name',
        'Last Name',
        'Email',
        'Avatar',
      ]);
      table.appendChild(topRow);

      for (let i = 0; i < jsObj.length; i++) {
        let row = createTextRow([
          jsObj[i].id,
          jsObj[i].first_name,
          jsObj[i].last_name,
          jsObj[i].email,
          jsObj[i].avatar,
        ]);
        table.appendChild(row);
      }
    }
  }
}

function createTextRow(data) {
  let rowElement = document.createElement('tr');

  for (let i = 0; i < data.length; i++) {
    let col = document.createElement('td');
    col.appendChild(document.createTextNode(data[i]));
    rowElement.appendChild(col);
  }
}

window.onload = makeRequest;