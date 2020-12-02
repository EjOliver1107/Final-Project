console.log("Sug dese nutz my guy")
menu1Button = document.getElementById("menu-1-button")
menu2Button = document.getElementById("menu-2-button")
menu3Button = document.getElementById("menu-3-button")
menu1 = document.getElementById("menu-1")
menu2 = document.getElementById("menu-2")
menu3 = document.getElementById("menu-3")

menu1Button.addEventListener('mouseover', menuOneShow);
menu2Button.addEventListener('mouseover', menuTwoShow);
menu3Button.addEventListener('mouseover', menuThreeShow);

function menusHide() {
    menu1.classList.remove('show');
    menu2.classList.remove('show');
    menu3.classList.remove('show');
  }
function menuOneShow(){
    menu1.classList.add('show');
    menu2.classList.remove('show');
    menu3.classList.remove('show');
  }
  function menuTwoShow(){
    menu1.classList.remove('show');
    menu2.classList.add('show');
    menu3.classList.remove('show');
  }
  function menuThreeShow(){
    menu1.classList.remove('show');
    menu2.classList.remove('show');
    menu3.classList.add('show');
  }
  menu1Button.addEventListener('mouseover', menuOneShow);
  menu2Button.addEventListener('mouseover', menuTwoShow);
document.getElementById('menu-3-button').addEventListener('mouseover', menuThreeShow);
menu1.addEventListener('mouseleave', menusHide);
menu2.addEventListener('mouseleave', menusHide);
menu3.addEventListener('mouseleave', menusHide);
