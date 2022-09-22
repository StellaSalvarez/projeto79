menuListArray = ["Pizza Vegetariana","Pizza de queijo","Pizza de frango","Pizza portuguesa","Calabresa"];

function getMenu(){
    var htmldata = "";
    menuListArray.sort();
    for(var i = 0; i<menuListArray.length; i++){
        htmldata = htmldata + menuListArray[i] + '<br>';
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
    var htmldata;
    var imgtags = '<img id="im1" src="images/pizzaImg.png"/>'
    var item = document.getElementById("inputItem").value;
    menuListArray.sort();
    htmldata = "";
    for(var i=0; i<menuListArray.length; i++){
      htmldata=htmldata + imgtags + menuListArray[i] + '<br>'    
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop(){
    var item = document.getElementById("inputItem").value;
    menuListArray.push(item);
    addItem();
}