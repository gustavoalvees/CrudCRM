let menu = 0;
var tM = 2;





document.body.addEventListener('click', function (event) {
    if(event.target.className.contains("dash")){
    	console.log(event.target.className)
    }
}, false);