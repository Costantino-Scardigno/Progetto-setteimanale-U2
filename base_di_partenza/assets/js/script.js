
const header = document.getElementById('head');
const scrollPoint = 300; 

window.addEventListener('scroll', () => {
  
  if (window.scrollY > scrollPoint) {
    
    header.classList.add('scroll');
  } else {
    
    header.classList.remove('scroll');
  }
});


const button = document.querySelector('.Getstart'); 
const scrollPoint2 = 300; 


window.addEventListener('scroll', () => {
  
  if (window.scrollY > scrollPoint2) {
    button.id= "btngreen";
  } else {
    button.id= " ";
  }
});