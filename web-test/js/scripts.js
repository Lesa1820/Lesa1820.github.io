menu.onclick = function(event) {
    var menu = document.getElementById('menu-mobile');
    toggle(menu);
  }
  function toggle(el) {
    el.style.display = (el.style.display == 'none') ? 'block' : 'none'
  }
  