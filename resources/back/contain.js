let data = "";

//var $ = jQuery = require('jquery');
//require('datatables.net')();

function xs(d){
    var text;
    if(d==1)
      text = ""
    else {text = document.getElementsByClassName("search-clientes")[0].value;}
    var searchv = " \
      SELECT * \
      FROM clientes \
      WHERE nome  LIKE '%"+text+"%' OR\
      email LIKE '%"+text+"%' OR\
      telefone LIKE '%"+text+"%' OR\
      cpf LIKE '%"+text+"%'\
    ";
      sqliteJS()
        .then(function(SQL){
            db = new SQL.Database(fileBuffer(file));
            var d = db.exec(searchv)
            var table = document.getElementsByClassName("table")[0];
            table.innerHTML = '<tr>\
                  <th scope="col">#</th>\
                  <th scope="col">Nome</th>\
                  <th scope="col">Email</th>\
                  <th scope="col">Telefone</th>\
                  <th scope="col">CPF</th>\
                  <th scope="col">Ação</th>\
              </tr>';
            try {
              for (var i = 0; i < d[0].values.length; i++) {
                var row = table.insertRow(0);
                row.insertCell(0).innerHTML = d[0].values[i][0];
                row.insertCell(1).innerHTML = d[0].values[i][1];
                row.insertCell(2).innerHTML = d[0].values[i][2];
                row.insertCell(3).innerHTML = d[0].values[i][3];
                row.insertCell(4).innerHTML = d[0].values[i][4];
                row.insertCell(5).innerHTML = "<a>button</a>";

              }
            }catch (e) {
              console.log(e)
            }
        });

}
xs(1)
document.getElementsByClassName("search-clientes")[0].addEventListener('keypress', function (event) {
  xs(0);
});