

// IIFE Function
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function(){
    header.style.color = 'blue'
    // header.style.color = 'red'
  })
})();
