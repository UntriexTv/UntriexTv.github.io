fetch('/feed.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    display_data(data);
  })
  .catch(function (err) {
    console.log(err);
  });
  function display_data(data){
    var list = document.getElementById('feed');
    for (var i = 0; i < data.length; i++){
        var entry = document.createElement('li');
        var div = document.createElement('div');
        var text = document.createElement('p');
        var link = document.createElement('a');
        var link_text = document.createTextNode(data[i].Name);
        var date_text = document.createElement("p");
        link.appendChild(link_text);
        link.title = data[i].Name;
        link.href = data[i].Link;
        text.innerHTML = data[i].Description;
        date_text.innerHTML = data[i].Date;
        div.className = "entry";
        date_text.id = "date";
        text.id = "description";
        div.appendChild(link);
        div.appendChild(date_text);
        div.appendChild(text);
        entry.appendChild(div);
        list.appendChild(entry);
    }
  }