let tmpFile = tmpFolder()+"\\dbcrawl.txt"

var $ = jQuery = require('jquery');
require('datatables.net')();


function xs(){
    var searchv = " \
      SELECT * \
      FROM clientes\
    ";
      sqliteJS()
        .then(function(SQL){
            db = new SQL.Database(fileBuffer(file));
            var d = db.exec(searchv)
            if(fs.existsSync(tmpFile)){
              fs.unlinkSync(tmpFile);
            }
            for (var i =0; i<d[0].values.length; i++){
              d[0].values[i][5] = "<button class='btn btn-danger' id='"+d[0].values[i][0]+"' onclick='selected="+d[0].values[i][0]+"'><i class='fas fa-user-minus'></i></button> <button class='btn btn-warning'><i class='fas fa-edit'></i></button>"
            }
            var d = JSON.stringify(d[0].values);
            fs.writeFileSync(tmpFile,d);  
          
        });

}




$(document).ready(function() {
      $('.table').DataTable( {
        "language":{
           "processing":     "processando...",
           "search":         "Procurar:",
           "lengthMenu": "Mostrar _MENU_ por pagina",
           "zeroRecords": "nenhum registro encontrado",
           "info": "mostrando pagina _PAGE_ de _PAGES_",
           "infoEmpty": "nenhum registro encontrado.",
           "infoFiltered": "(fitltrado de _MAX_ registros)",
           "paginate": {
                "first":      "Primeiro ",
                "last":       "Ultimo ",
                "next":       "Proximo ",
                "previous":   "Anterior ",
            }
         },
         "ajax":{url:tmpFile,dataSrc:""},
         "scrollY":        "350px",
         responsive: true,
         //"scrollCollapse": true,
         //"bAutoWidth":     false,
         columns: [
            { title: "#" },
            { title: "Nome" },
            { title: "Email" },
            { title: "Telefone" },
            { title: "CPF" },
            { title: "Ação" },
         ],
      } );
  } );

xs()