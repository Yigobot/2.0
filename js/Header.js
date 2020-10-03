

var header = document.getElementById("headerBox");
header.innerHTML = `
<header class="header">
<div class="left">
<a href="index.html"> <img class="logo" src="images/logo.svg" alt="Logo"> </a>
</div>
<div class="center">
    <div id="menu" class="active">
      <div class="blog">
          <a href="html/blog.html">BLOG</a>
      </div>
        <div>
            <a href="servicios.html">SERVICIOS</a>
        </div>
        <div>
            <a href="portafolio.html">PORTAFOLIO</a>
        </div>
        <div>
            <a href="contacto.html">CONTACTO</a>
        </div>
    </div>    
</div>
<div class="right">
    <div class="icons">
    <a href="https://www.instagram.com/alhazred.photo/" target="_blank"> <p>I</p></a>
    <a href="https://www.youtube.com/channel/UC_Lr64NTWMX9u-4opwlWP9g" target="_blank"><p>Y</p></a>
    <a href="https://www.behance.net/alhazred-art" target="_blank"><p>B</p></a>
     </div>
</div>
<div class="b-menu">
  <p>M</p>
</div>
</header> 

`;

const btnMenu = document.querySelector(".b-menu"); 
btnMenu.addEventListener('click', function(){
document.getElementById('menu').classList.toggle('active');
}); 