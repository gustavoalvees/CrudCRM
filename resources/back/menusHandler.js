let menu     = 0; // global
let selected = -1;
var tMenu    = 0; // local temp
let tmpFile  = tmpFolder()+"\\dbcrawl.txt"

var $ = jQuery = require('jquery');
require('datatables.net')();


function getuserName(id){
    var d;
    sqliteJS().then(function(SQL){
        db = new SQL.Database(fileBuffer(file));
        d = db.exec("SELECT * FROM CLIENTES WHERE ID = ?",[id]);
    });
    console.log(d)
}
document.body.addEventListener('click', function (event) {
    if(document.getElementsByClassName("table")[0]){
        if(selected != -1){
            var datos = getuserName(selected+1)
            console.log(datos)
            selected = -1;
        }
    }
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