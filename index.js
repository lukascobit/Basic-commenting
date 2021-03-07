let textarea = document.getElementById("textarea");

function process(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
        Commenting()
    }
}


function Commenting(){
 
let today = new Date();



let time = today.getHours() + ":" + today.getMinutes();

let Name = document.getElementById("Name").value;

if(Name == ""{
Name = "Anonymous"
}



if(document.getElementById("textarea").value !== ""){
    document.getElementById("Comment").innerHTML += document.getElementById("textarea").value + "<small><em> -" + Name + " " + time +"</small></em><br>";
}

    document.getElementById("textarea").value = null;

} 