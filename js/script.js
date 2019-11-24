function clearPage(){
    var div = document.getElementsByClassName('content');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }   
}