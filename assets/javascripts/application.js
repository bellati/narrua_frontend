var showOrHideMenu = function() {
  var menuButton = document.getElementById('menu-button-a');
  var menuList = document.getElementById('menu-list');
  switch (menuButton.className) {
    case 'unactive': menuButton.className = 'active'; menuList.className = 'opened'; break;
    case 'active': menuButton.className = 'unactive'; menuList.className = 'closed'; break;
    default: console.log('undefined');
  }
}

window.onload = function() {
}