function init(){
   
    var bHaveFileAPI = (window.File && window.FileReader);

    if(!bHaveFileAPI){

        alert("this browser does't support the file API ");
        return ;
    }

    document.getElementById("fileElem").addEventListener("change",onFileChanged);

}

function onFileChanged (evt){

    alert("You Selected a file :" + evt.target.files[0].name);
}
window.addEventListener("load",init);