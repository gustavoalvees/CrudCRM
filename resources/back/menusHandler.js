let menu     = 0; // global
let selected = -1;
var tMenu    = 0; // local temp
let tmpFile  = tmpFolder()+"\\dbcrawl.txt"

var $ = jQuery = require('jquery');
require('datatables.net')();

function DeleteUser(id){
    sqliteJS().then(function(SQL){
        db = new SQL.Database(fileBuffer(file));
        var c = db.exec("SELECT * FROM clientes WHERE ID = ?",[id]);
        var sent = confirm("Certeza que quer deletar o cliente "+c[0].values[0][1]+"?")
        if(sent){
            d = db.exec("DELETE FROM clientes WHERE ID = ?",[id]);
            $('.table').DataTable().rows( function ( idx, data, node ) { 
                /*
                    https://datatables.net/forums/discussion/43162/removing-rows-from-a-table-based-on-a-column-value
                */
                return data[0]===id;
            }).remove().draw();

            alert("cliente "+c[0].values[0][1]+" foi deletado com sucesso!")
            saveDB(file)
        }


    });
}

document.body.addEventListener('click', function (event) {
    //console.log(menu)
    if(document.getElementsByClassName("table")[0]){
        if(selected != -1 && menu == 4){
            DeleteUser(selected)
            selected = -1;
        }
    }
    if(menu != tMenu){ 
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