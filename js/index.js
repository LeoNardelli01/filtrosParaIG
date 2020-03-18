$(function(){
  var typed = new Typed('#typed', {
  strings: ["", "Filtros personalizados", "Casamientos, Despedidas de solteros", "Logos Empresariales", "Baby showers", "Ocaciones especiales", "Soprende a tus amigos"],
  typeSpeed: 70,
  showCursor: false,
  loop: true
});


  var vMascara = $("video")[0];
  var vMascaraFlotante = $("video")[1];
  var vFondo = $("video")[2];
  var vLogo = $("video")[3];
  var height = $(document).height();
  console.log(height);
  
  $(document).on('scroll',function(){

    var scrollTop = $(document).scrollTop();
    console.log("Scroll: " + scrollTop);


    if (scrollTop < 10) {
      vMascara.pause();
      vMascaraFlotante.pause();
      vFondo.pause();
      vLogo.pause();

    } else{
      vMascara.play();
      vMascaraFlotante.play();
      vFondo.play();
      vLogo.play();
    }

  });


});
