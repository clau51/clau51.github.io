var httpRequest;

function makeRequest() {
  debugger;
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

      let expertise = document.querySelector('.expertise-content');

      for (let i = 0; i < jsObj.data.length; i++) {
        let article = document.createElement('article');
        article.setAttribute('class', 'card');

        let h2 = document.createElement('h2');
        h2.setAttribute('class', 'name');
        h2.appendChild(document.createTextNode(jsObj.data[i].first_name + ' ' + jsObj.data[i].last_name));

        let header = document.createElement('header');
        header.appendChild(h2);

        let img = document.createElement('img');
        img.setAttribute('src', jsObj.data[i].avatar);          
        // img.alt = jsObj[i].first_name + ' ' + jsObj[i].last_name;
        img.setAttribute('alt', jsObj.data[i].first_name);

        let p = document.createElement('p');
        p.setAttribute('class', 'email-header');
        p.innerHTML = '<b>Email:</b>';

        let email = document.createElement('p');
        email.setAttribute('class', 'email');
        // email.innerHTML = jsObj[i].email;
        email.appendChild(document.createTextNode(jsObj.data[i].email));

        let div = document.createElement('div');
        div.appendChild(p);
        div.appendChild(email);

        article.appendChild(header);
        article.appendChild(img);
        article.appendChild(div);
        expertise.appendChild(article);
      }
      

      // jsObj.forEach = function (jsObj) {

      //   let article = document.createElement('article');
      //   article.setAttribute('class', 'card');

      //   let h2 = document.createElement('h2');
      //   h2.setAttribute('class', 'name');
      //   h2.innerHTML = jsObj.first_name + ' ' + jsObj.last_name;

      //   let header = document.createElement('header');
      //   header.appendChild(h2);

      //   let img = document.createElement('img');
      //   img.src = jsObj.avatar;
      //   img.alt = jsObj.first_name + ' ' + jsObj.last_name;

      //   let p = document.createElement('p');
      //   p.setAttribute('class', 'email-header');
      //   p.innerHTML = 'Email:';

      //   let email = document.createElement('p');
      //   email.setAttribute('class', 'email');
      //   email.innerHTML = jsObj.email;

      //   let div = document.createElement('div');
      //   div.appendChild(p);
      //   div.appendChild(email);

      //   article.appendChild(header);
      //   article.appendChild(img);
      //   article.appendChild(div);
      //   expertise.appendChild(article);
      // }

      // document.querySelector('.expertise-content').appendChild(article);
    } else {
      alert(
        'There was a problem with the request. May be caused by the "CORS" issue'
      );
    }
  }
}

window.onload = function () {
  makeRequest();
}


