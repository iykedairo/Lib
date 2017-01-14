// Instead of alert, UserAgent on the screen corner
//All custom code will be here.
//These custom codes will be  called and used natively in the scripts pages.
//These codes are custom because they are made up of different fragments of self-made re-usable chunks of code
//The code is for the purpose of a self-made Library profitable for personal use.
//Therefore, there should be an expectation for upgrades and time-stamped changes that aims to match the liquxity of the web.
//EVENT UTILITY 


;(function(window, element, undefined){
	window, document, undefined;
		var body = document.body || document.createElement("body"), html = document.documentElement, head = document.head,
		 url = document.URL, BaseURI = document.baseURI, URI = document.documentURI, element = typeof document.nodeType === 2;



	var PT = PT || {
		page : true,
		log : function(){
			console.log("window:"+window+" document:"+document+" html:"+html+" body"+body+" head"+head+" url :"+url);
			console.log("BaseURI :"+BaseURI+" :URI: "+URI+" element :"+element);
		},

		isElement : true,
		isAbsent : function(element){
			var tag = SAPI.tagName(element);
			if(element === null || Object && !tag){
				return true;
			}

			return false;
		},
		isPresent : function(element){
			if(typeof element === "object" && element.ownerDocument.body.contains(element) != undefined){
				return true;
			}

			return false;
		},
		isBool : function(arg){
			return (typeof arg === "boolean" && !!arg === true || !!arg === false) ? true : false;
		},
		isFunction : function(element){
			return (typeof element === "object" && element !== null) ? true : false;
		},
		isObject : function(element){
			return (typeof element === "object" && element !== null) ? true : false;
		},
		isArray : function(element){
			return (typeof element === "array" && element !== null) ? true : false;

		},
		isPrimitive : function(arg){
			return (!isUndefined(arg) && !isArray(arg) && !isFunction(arg) && !isObject(arg)) ?
			(isNumber(arg) || isString(arg)) ? true : false : false;
		},
		isNumber : function(arg){
			return (typeof arg === "number" || parseInt(arg) !== NaN) ? true : false;
		},
		isString : function(arg){
			return (typeof arg === "string") ? true : false;
		},
		isNAN : function(arg){
			return (arg === NaN || typeof arg == "NaN")
		},
		isNUL : function(element){
			return (element === null) ? true : false;
		},
		isUndefined : function(element){
			return (typeof element === undefined) ? true : false;
		},
		isEmpty : function(element){
			return (!isUndefined(element) && element.value === " ") ? true : fasle;
		},
		log : function(log){
			console.log(log);
		},

mixin : function(receiver, supplier) {
			Object.keys(supplier).forEach(function(property) {
			var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
			Object.defineProperty(receiver, property, descriptor);
			});
			return receiver;
			},

	Cookie : (function(checkFirstVisit){
				if (document.cookie.indexOf("mycookie") == -1) {
					//cookie doesn't exist, create it
					document.cookie = "mycookie = 1";
				}
					else{
						//not first visit, so fire your weapon.
						alert("You just refreshed. Why?");
					}
				
			}),


Clear : function(){
			item.value = " ";
				item.placeholder = "New item";
				value.value = " ";
				value.placeholder = "The vlaue";
				item.focus();
		},

Clean : function(){ 
			//reset all fields here
				
	      var clear = (function(){
				Total = 0;
			total.innerHTML = "Total: " + Total;
			Results.innerHTML = " ";
			prompt("You must write something now.")
			});
			return [clear(), Clear()];
		},

EnterKeyPress : function(event){
		event = event || window.event;
		if(event.keyCode == 13){
		console.log("Session submitted. . .");
		if( !value.value || !item.value){
			console.log("Please supply the values.");
		}
		else { 
			Foo();
			console.log("Session values computed.");
			}
}},

	
Keypress : function(evt) {                
        evt = evt || window.event;
        switch (evt.keyCode) {
                case 13: //enter
                //alert("Enter key pressed. Be careful!");
                Foo();
                //leftArrowPressed(nextUrl);
                break;

                case 96: //esc .. .NOT WORKING YET
                alert("esc key just got a message");
                Clean();
                break;

                 case 32: //space bar
                //rightArrowPressed(prevUrl);
                break;

				case 16: //shift
                //rightArrowPressed(prevUrl);
                break;

                case 8: //backspace
                //downArrowPressed(prevUrl);
                break;

        }
    }
		
		
	};

	Function.prototype.FN = function(fn){
		PT.mixin(this.prototype, fn)
		return this;
	};

var SAPI = PT.SAPI = PT.prototype = {

	Create : function(element){
		element	= document.createElement(element);
			return this;
		},
		CreateElement : function(a, b){
	var elem = Create(a);
		b.insertBefore(elem, b[0]);
	},

CreateToBody : function(e){
		var element = Create(e);
		body.appendChild(element);
		return this;
	},

CreateRow : function(x){
		var temp = Create("table");
		temp.innerHTML = "<tr width=100%> <td width=50%></td> <td width=50%></td></tr>";
		var RowData = temp.firstChild;
		x.insertBefore(RowData, x[0]);
		console.log("Done!");
	},

CreateTable : function(){	
	var fragment = document.createDocumentFragment();
	var temp = Create("hr");
	temp.innerHTML = 
	"<table id=table width=50% border=1px><tr width=100%><td width=50%></td> <td width=50%></td></tr></table>";
	var table = temp.firstChild;
		body.insertBefore(table, body.children[0]);
		console.log( temp + "craeted with id: ");
		},
Table : function(a){
	console.clear();
		console.log("Table initializes . . . start");
	var table = document.createElement("table"),
    Row = document.createElement("tr"),
    Cell = document.createElement("td"),
    anotherCell = document.createElement("td"),
    body = document.body;	
	 Cell.id = "cell 1", anotherCell.id = "cell 2";
	 Cell.innerHTML = "Cell One", anotherCell.innerHTML = "Cell Two";

table.id = "table";
this.Cell = Cell, this.Row = Row, this.anotherCell = anotherCell;
console.log("....end");
!function(){
		console.log("Insert initializes . . . start");
	if(a){
		console.clear();
		console.log("We have argument " + a + " supplied. Good to go!");
		if(arguments.length == 0){
		 a.insertBefore(Row, a.children[0]);
		 //table.insertBefore(Row, table[0]);
		 Row.insertBefore(Cell, Row[0]);
		 Row.insertBefore(anotherCell, Row[1]);
		 console.log("Success!"+ table + "created with these information:- id:" + table.id + ", " + Row + " " + Cell + ": " + Cell.id + " " + anotherCell + ": " + anotherCell.id );

return table;
		}
	else if(arguments.length != 0){
		console.log("Please, only one arguments are required.");
	}
	else{
		console.log("Your arguments :" + arguments[0] + arguments[1] + "are not applicable in this context.");
}
	}
	else{
		console.clear();
		console.log("No values . . . default values will be submitted instead");
			!function(){
		 body.insertBefore(table, body[0]);
			table.insertBefore(Row, table[0]);
			Row.insertBefore(Cell, Row[0]);
//			Row(Cell, Row[1]);
			Cell.parentNode.insertBefore(anotherCell, Cell[1]);

			return table;
			}();
	}
 }();	 
},

appendBeforeParent : function(parent, element){//test
			return (parent !== null) ? parent.parentNode.insertBefore(element, parent[0]) : console.log(parent + "is null");
		},

append : function(element, child){//test
			var e = (element !== null) ? 	element.parentNode.insertBefore(child, element.nextSibling) :
			 console.log(element.constructor + " is null here.");
			 return this;
		},

prepend : function(parent, child){//test
			return (parent !== null) ? parent.insertBefore(child, parent.children[0]) : console.log(parent+ "is null");
		},
	
qs : function(id){//good
		return(document.querySelector) ? document.querySelector(id) : (document.querySelectorAll) ? document.querySelectorAll(id) :
		document.all(id);
	},

id : function(id){//good
		return document.getElementById(id);
	},

className : function(className){
		return document.getElementsByClassName(className);
	},

ElementName : function(elementName){
		return document.getElementsByName(elementName);
	},

setAttr : function(e, attr, value){
		return e.setAttribute(attr, value);
	},

getAttr : function(element, attr){         var a = element.getAttribute(attr);
return this;     },

hasAttr : function(element, attr){
		return element.hasAttribute(attr);
	},

removeAttr : function(element, attr){
		return element.removeAttribute(attr);
	},

tagName : function(tag){
		tag = document.getElementsByTagName(tag);
			return tag;
	},

	
removeChild(element, child){
		return element.removeChild(child);
	},

addChild(element, child){
		return (typeof SAPI.append(element, child) !== undefined) ? SAPI.append(element, child) : SAPI.CreateTo(element, child);
	},

replaceChild : function(element, child, replacement){//test
		return element.replaceChild(child, replacement);
	},

each : function(list, fn){
		var i, length = list.length;
		for(i = 0; i < length; i++){
			fn.call(list[i], i);
		}
		return true;
	},

today : (function(){
"use strict";
 var getNow = function(){
var DateToday = new Date();
 	return DateToday;//.toUTCString();
 }();
var dateDiv = document.createElement("h3");
var dateDivPos = document.body.appendChild(dateDiv);
dateDiv.innerHTML = getNow;
dateDiv.style.cssText = "background: #000000; color: #ebebeb; text-align:center;font-style: Impact;font-weight:bold;font-size:100%;border-radius:4%;width:20%;position:absolute;right:0;top:0";
//call it in your document script thus:
//EventUtil.today();
//works with both inline and external scripts same way.
}),

clone : (function(object){
	if (object === null || typeof object !== "object" || "isActiveClone" in object) {
		//return object;
		if (object instanceof Date) {
			var temp = new object.constructor();
		}
		else{
			var temp = object.constructor();
		}
		for (var key in object) {
			if (Object.prototype.hasOwnProperty.call(object, key)) {
				object["isActiveClone"] = null;
				temp[key] = clone(object[key]);
				delete object["isActiveClone"];
			}

		}
		return temp;
	}

}),

setInnerText: function(element, text){
if (typeof element.textContent == "string"){
element.textContent = text;
} else {
element.innerText = text;
}
},

getInnerText: function(element){
return (typeof element.textContent == "string") ?
element.textContent : element.innerText;
},//alert(getInnerText(div)); //"Hello world!"

nthChild : function(parent, pos, childPos) {
	if(parent.nodeType == 2){
		parent = document.getElementsByTagName(parent)[pos];
		return parent.children[childPos];
	}

	
},
	loadScripts : function(){
	var scripts = 10;
	var sources = arguments;
	for(var i = 0; i < scripts && i < sources.length; i++){
	var j = scripts[i];
	j = document.createElement("script");
	j.type = "text/javascript";
	j.defer = true;
	j.src = "../" + sources[i];
	var poSItion = document.head.appendChild(j);
			}
		}

};



var EventUtil = PT.EventUtil = {
	addHandler: function(element, type, handler){
if (element.addEventListener){
element.addEventListener(type, handler, false);
} else if (element.attachEvent){
element.attachEvent("on" + type, handler);
} else {
element["on" + type] = handler;
}
},

removeHandler: function(element, type, handler){
if (element.removeEventListener){
element.removeEventListener(type, handler, false);
} else if (element.detachEvent){
element.detachEvent("on" + type, handler);
} else {
element["on" + type] = null;
}
},


getEvent: function(event){
return event ? event : window.event;
},


getTarget: function(event){
return event.target || event.srcElement;
},


preventDefault: function(event){
if (event.preventDefault){
event.preventDefault();
} else {
event.returnValue = false;
}
},



stopPropagation: function(event){
if (event.stopPropagation){
event.stopPropagation();
} else {
event.cancelBubble = true;
}
},
//more code here
getRelatedTarget: function(event){
if (event.relatedTarget){
return event.relatedTarget;
} else if (event.toElement){
return event.toElement;
} else if (event.fromElement){
return event.fromElement;
} else {
return null;
}
}


//more code here

};
//console.log(PT.SAPI.tagName());
//PT.log();
window.SAPI = SAPI;
window.PT = PT;
return PT;
}(window));