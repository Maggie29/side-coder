window.addEventListener("load", function(){
  var publicar= document.getElementById("publicar");
  var post= document.getElementById("post");
  var printPost= document.getElementById("print-post");
  var comentario = [];
  publicar.addEventListener("click", function(e){
    e.preventDefault();

    if(post.value != ""){
      var parrPost=document.createElement("p");
      document.getElementById("contenido").innerHTML= "";
      parrPost.innerHTML = post.value;
      comentario.push(printPost.prepend(parrPost));
      document.getElementById("form").reset()
    }

  })
})
