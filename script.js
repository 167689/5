(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(function (data) { appendData(data)
        console.log(data)})
     function appendData(data){
      answer.innerHTML="";
      for (var i =0; i <data.length;i++){
        var div = document.createElement("div");
        div.innerHTML= '<strong>UserID: ' + data[i].userId + '</strong> <br> <strong>id: '+ data[i].id + '</strong> <br> <strong>title: '+ data[i].title + '</strong> <br> <strong>body: '+ data[i].body + '</strong> <br> ' ;
        answer.appendChild(div);
      }
      }
  })

  cw2.addEventListener("click", function () {
    //TODO implement it
  })

  cw3.addEventListener("click", function () {
    //TODO implement it
  })

})();
