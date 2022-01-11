let menu = 0; // global
var tMenu = 0; // local temp 

document.body.addEventListener('click', function (event) {
    if(menu != tMenu){ 
        //console.log(menu)
        if(menu >= 0 && menu < 4){// tab main
            document.getElementsByClassName("handlerClick")[tMenu].classList.remove("active");
            document.getElementsByClassName("handlerClick")[menu].classList.add("active") ;
            for (var i=0; i <= 3; i++) {
                document.getElementsByClassName('header-'+i)[0].style.display = "none";
            }
            document.getElementsByClassName('header-'+menu)[0].style.display = "block";
        }
        if(menu > 3){// tab client
            document.getElementsByClassName("handlerClick")[tMenu].classList.remove("active");
            document.getElementsByClassName("handlerClick")[menu].classList.add("active");

            document.getElementsByClassName('client-5')[0].style.display = "none";
            document.getElementsByClassName('client-4')[0].style.display = "none";
            document.getElementsByClassName('client-'+menu)[0].style.display = "block";
        }   
        tMenu = menu;
    }

}, false);