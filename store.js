function view() {
    let products = document.querySelectorAll('.store > div');
    for (let i = 0; i < products.length; i++) {
        products[i].style.opacity = '.4';
    }
    this.style.opacity = '1';
    this.style.scale = '.85';
    if(window.innerWidth<751 && window.innerHeight<1021){
      this.style.scale = '.65'
    }
}

function endview() {
    let products = document.querySelectorAll('.store > div');
    for (let i = 0; i < products.length; i++) {
        products[i].style.opacity = '1';
        products[i].style.scale = '.8';
        if(window.innerWidth<751 && window.innerHeight<1021){
          products[i].style.scale = '.6'
        }
    }
}

let navbar = document.getElementById('nav-bar')

let prevScrollpos = window.pageYOffset; // Initial scroll position

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // If scrolling up, show navbar
    navbar.style.transform = 'translateY(0%)';
    navbar.style.background = 'black';
  } else {
    // If scrolling down, hide navbar
    navbar.style.transform = 'translateY(-100%)';
  }
  prevScrollpos = currentScrollPos;
  if(prevScrollpos === 0){
    navbar.style.background = 'transparent';
  }
}

let Menu = document.getElementById('menu');
let op = true;
let one = document.getElementById('one')
let two = document.getElementById('two')
let tree = document.getElementById('tree')


function menu(){
  
  if (op) {
    Menu.style.right = '0';
    op = false;
    one.style.rotate = '45deg'
    one.style.transformOrigin = 'center'
    one.style.transform = 'translateY(7px)'
    two.style.display = 'none';
    tree.style.rotate = '-45deg'
    tree.style.transformOrigin = 'center'
    tree.style.transform = 'translateY(-7px)'
    navbar.style.background = 'black';

  } else {
    Menu.style.right = '-40%';
    op = true;
    one.style.rotate = '0deg'
    one.style.transformOrigin = 'center'
    one.style.transform = 'translateY(0px)'
    two.style.display = 'block';
    tree.style.rotate = '-0deg'
    tree.style.transformOrigin = 'center'
    tree.style.transform = 'translateY(-0px)'
    navbar.style.background = 'transparent';
  }
}

console.log(innerWidth)



