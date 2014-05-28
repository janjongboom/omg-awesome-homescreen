navigator.mozApps.mgmt.getAll().onsuccess = function(ev) {
  ev.target.result.forEach(function(app) {
    var li = document.createElement('li')
    li.textContent = app.manifest.name;

    li.onclick = function() {
      app.launch();
    }

    var img = document.createElement('img');
    if (app.manifest.icons) {
      img.src = app.origin + app.manifest.icons['120'];
  
      li.appendChild(img);
    }

    document.querySelector('#apps').appendChild(li);
  })
}