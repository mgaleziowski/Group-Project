function req(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("mock").innerHTML=this.responseText
        }
    };
    xhttp.open("GET","test.csv",true);
    xhttp.send();
}

