(function () {
  var openButton = document.getElementById('openNavigation');
  var closeButton = document.getElementById('closeNavigation');
  var navigation = document.getElementById('navigation');
  openButton.addEventListener('click', openNavigation);
  closeButton.addEventListener('click', closeNavigation);
  function openNavigation () {
    navigation.style.width = '250px';
  }
  function closeNavigation () {
    navigation.style.width = '0px';
  }
})();
