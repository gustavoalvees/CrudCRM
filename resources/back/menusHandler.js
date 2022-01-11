let menu = 0; // global
var tMenu = 0; // local temp 

var headerTabs  = 3;
var clientsTabs = 1;

document.body.addEventListener('click', function (event) {
    if(menu != tMenu){ 
        console.log(menu)
        if(menu >= 0 && menu < 4){// tab main
            document.getElementsByClassName("handlerClick")[tMenu].classList.remove("active");
            document.getElementsByClassName("handlerClick")[menu].classList.add("active") ;
            for (var i=0; i <= headerTabs; i++) {
                document.getElementsByClassName('header-'+i)[0].style.display = "none";
            }
            document.getElementsByClassName('header-'+menu)[0].style.display = "block";
        }
        if(menu > 3){// tab client
            document.getElementsByClassName("handlerClick")[tMenu].classList.remove("active");
            document.getElementsByClassName("handlerClick")[menu].classList.add("active") ;
        }   
        tMenu = menu;
    }

}, false);