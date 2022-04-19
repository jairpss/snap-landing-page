const drop = document.querySelectorAll('.dropdown');


// dropdown menu

drop.forEach(n => n.addEventListener('click', () => {
    n.classList.toggle('active');
    
    const dropCon = n.nextElementSibling;
  
    if (n.classList.contains('active')) {
      dropCon.classList.add('active');
    } 
    else {
      dropCon.classList.remove('active');
    }
  
  }));