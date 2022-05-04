fetch('/setup.json')
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
    var list = document.getElementById('setup');
    for (var i = 0; i < data.length; i++){
        var entry = document.createElement('tr');
        var number = document.createElement('th')
        var s_name = document.createElement('th');
        var s_cpu = document.createElement('th');
        var s_ram = document.createElement('th');
        var s_storage = document.createElement('th');
        var s_usage = document.createElement('th');
        number.innerHTML = i;
        s_name.innerHTML = data[i].Name;
        s_cpu.innerHTML = data[i].CPU;
        s_ram.innerHTML = data[i].RAM;
        s_storage.innerHTML = data[i].Storage;
        s_usage.innerHTML = data[i].Usage;
        entry.appendChild(number);
        entry.appendChild(s_name);
        entry.appendChild(s_cpu);
        entry.appendChild(s_ram);
        entry.appendChild(s_storage);
        entry.appendChild(s_usage);
        list.appendChild(entry);
    }
  }