/*
This is a sample of CSS with javascript. Just to prove a point or maybe just to fulfil some fun. either way, we own it all and therefore do it the way we love provided clarity is our integrity and accessibility our parmanent goal. Let's get into stuff.

*/

var cssDiv = document.createElement("div");
cssDiv.id = "cssDiv";
document.getElementsByTagName("body")[0].appendChild(cssDiv);
//Then you can begin doing anything you can wish . . .
 

cssDiv.style.cssText = "width: 25px; height: 100px; background-color: green";
alert(myDiv.style.cssText);//css provided in this way overwrites everything about the custom css provided.
myDiv.style.removeProperty("border");//if you remove a property this way, any other available one will be applied for it.




DOM Level 3 also introduces methods for attaching additional data to DOM nodes. The setUserData()
method assigns data to a node and accepts three arguments: the key to set, the actual data (which may
be of any data type), and a handler function. You can assign data to a node using the following code:
document.body.setUserData("name", "Nicholas", function(){});
You can then retrieve the information using getUserData() and passing in the same key, as shown here:
var value = document.body.getUserData("name");

The handler function for setUserData() is called whenever the node with the data is cloned,
removed, renamed, or imported into another document and gives you the opportunity to determine
what should happen to the user data in each of those cases. The handler function accepts fi ve
arguments: a number indicating the type of operation (1 for clone, 2 for import, 3 for delete, or 4 for
rename), the data key, the data value, the source node, and the destination node. The source node
is null when the node is being deleted, and the destination node is null unless the node is being
cloned. You can then determine how to store the data. Here is an example:
var div = document.createElement("div");
div.setUserData("name", "Nicholas", function(operation, key, value, src, dest){
if (operation == 1){
dest.setUserData(key, value, function(){}); }
});
var newDiv = div.cloneNode(true);
alert(newDiv.getUserData("name")); //"Nicholas"


//make sure this element is visible
document.forms[0].scrollIntoView();

var childCount = element.children.length;
var firstChild = element.children[0];
alert(document.documentElement.contains(document.body)); //true



function getInnerText(element){
return (typeof element.textContent == "string") ?
element.textContent : element.innerText;
}


function setInnerText(element, text){
if (typeof element.textContent == "string"){
element.textContent = text;
} else {
element.innerText = text;
}
}


setInnerText(div, "Hello world!");
alert(getInnerText(div)); //"Hello world!"







document.body
var head = document.head || document.getElementsByTagName("head")[0];//capability detection of the head

document.head
<div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>
//When a custom data attribute is defined, it can be accessed via the dataset property of the element.
var div = document.getElementById("myDiv");
//get the values
var appId = div.dataset.appId;
var myName = div.dataset.myname;
//set the value
div.dataset.appId = 23456;
div.dataset.myname = "Michael";
//is there a "myname" value?
if (div.dataset.myname){
alert("Hello, " + div.dataset.myname);
}














alert(document.charset); //"UTF-16"
document.charset = "UTF-8";
if (document.charset != document.defaultCharset){//juct to make cure yourc ic being uced. yourc ic cuctom and theirc ic default
alert("Custom character set being used.");
}

div.classList.remove("user");
//remove the "disabled" class
div.classList.remove("disabled");
//add the "current" class
div.classList.add("current");
//toggle the "user" class
div.classList.toggle("user");
//figure out what’s on the element now
if (div.classList.contains("bd") && !div.classList.contains("disabled")){
//do something
)


var button = document.getElementById("myButton");
button.focus();
alert(document.activeElement === button); //true


var button = document.getElementById("myButton");
button.focus();
alert(document.hasFocus()); //true


MY APP
if(document.focus == true){
input1.focus();//if the body loaded good, focus on input1.
}

if (document.readyState == "complete"){
//do something
}

if (document.compatMode == "CSS1Compat"){
alert("Standards mode");
} else {
alert("Quirks mode");
}