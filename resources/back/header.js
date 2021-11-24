let menu = 0;
var tMenu = -1;







document.body.addEventListener('click', function (event) {
    //console.log(menu)
    if(menu != tMenu){   
        document.getElementById('0').style.display = "none"
        document.getElementById('1').style.display = "none"
        document.getElementById('2').style.display = "none"
        document.getElementById('3').style.display = "none"
        document.getElementById(menu).style.display = "block"

        tMenu = menu
    }   
}, false);