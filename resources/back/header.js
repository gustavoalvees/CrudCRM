let menu = 0; // global
var tMenu = 0; // local temp 







document.body.addEventListener('click', function (event) {
    
    if(menu != tMenu){ 
        document.getElementsByClassName("nav-link shadow rounded")[tMenu].classList.remove("active")
        document.getElementsByClassName("nav-link shadow rounded")[menu].classList.add("active")  
        
        document.getElementById('0').style.display = "none"
        document.getElementById('1').style.display = "none"
        document.getElementById('2').style.display = "none"
        document.getElementById('3').style.display = "none"
        document.getElementById(menu).style.display = "block"
        tMenu = menu

    }   
}, false);