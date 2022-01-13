const sqliteJS = require('sql.js');
const fs = require('fs');

let db;
let file;


function tmpFolder(){
  return (process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share")) + "\\crudcrm_DB\\";  
}

function fileBuffer(filetmp){
  return filebuffer = fs.readFileSync(filetmp);
}

function essentialFiles(){
  if (!fs.existsSync(tmpFolder())){
    fs.mkdirSync(tmpFolder(), (err) => {
      alert("erro ao criar a pasta...:\n "+err);
    });
  }

  if(!fs.existsSync(file)){
    fs.writeFileSync(file,"");  
  }
}

function saveDB(tmpfile){
  const data = db.export();
  const buffer = new Buffer(data);
  fs.writeFileSync(tmpfile, buffer);
}

function addCliente(name,email,telefone,cpf,filetmp){
  sqliteJS()
      .then(function(SQL){
        db = new SQL.Database(fileBuffer(filetmp));
        db.run("INSERT INTO clientes VALUES (?,?,?,?,?)", [null,name,email,telefone,cpf]);
        saveDB(filetmp)
      });
}

function searchCliente(text,filetmp){ //CharIndex('Street',Student_Address) > 0
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
            db = new SQL.Database(fileBuffer(filetmp));
            var d = db.exec(searchv)
            return d[0].values;
        });
}

function MBstructure(filetmp){
    var table_clientes = " \
      CREATE TABLE IF NOT EXISTS clientes (\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        nome TEXT NOT NULL,\
        email TEXT NOT NULL,\
        telefone TEXT NOT NULL,\
        cpf TEXT NOT NULL\
      );\
    ";

    sqliteJS()
        .then(function(SQL){
          db = new SQL.Database(fileBuffer(filetmp));
          var dlgv = db.run(table_clientes);
          saveDB(filetmp)
        });

}



file = tmpFolder()+"\\db.sqlite";
essentialFiles();
MBstructure(file)
//console.log(searchCliente("tembrolona",file))
//addCliente("Tembrolona Soares","tembro@hotmail.com","20202020","123123",file);
//addCliente("Johnahth","ethgan@hotmail.com","20202020","123123",file);
/*sqliteJS().then(function(SQL){
  db = new SQL.Database(file);
});*/