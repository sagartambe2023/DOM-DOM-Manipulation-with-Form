
let maindiv = document.createElement("div");
maindiv.setAttribute("class", "main");
document.body.append(maindiv);

let formcomponant = document.createElement("form");
formcomponant.setAttribute("id", "form");
maindiv.append(formcomponant);

let headingsdiv = document.createElement("div");
headingsdiv.classList.add(
  "form-group",
  "d-flex",
  "flex-column",
  "justify-content-center",
  "align-items-center"
);
form.append(headingsdiv);

let formtitle = document.createElement("h1");
formtitle.setAttribute('id','title')
formtitle.innerHTML = "DOM MANIPULATION WITH FORM";
headingsdiv.append(formtitle);

let formsubtitle = document.createElement("p");
formsubtitle.setAttribute('id','description')
formsubtitle.innerHTML ="Please Fill All Details";
headingsdiv.append(formsubtitle);


let firstnamediv = document.createElement("div");
firstnamediv.classList.add("form-group");
form.append(firstnamediv);
let firstnamelabel = document.createElement("label");
firstnamelabel.setAttribute("for", "first-name");
firstnamelabel.innerHTML = "First Name ";
firstnamediv.append(firstnamelabel);
let firstnameinput = document.createElement("input");
firstnameinput.setAttribute("id", "first-name");
firstnameinput.setAttribute("type", "text");
firstnameinput.setAttribute("placeholder", "Enter First Name");
firstnameinput.setAttribute("required", "");
firstnamediv.append(firstnameinput);

let lastnamediv = document.createElement("div");
lastnamediv.classList.add("form-group");
form.append(lastnamediv);
let lastnamelabel = document.createElement("label");
lastnamelabel.setAttribute("for", "last-name");
lastnamelabel.innerHTML = "Last Name ";
lastnamediv.append(lastnamelabel);
let lastnameinput = document.createElement("input");
lastnameinput.setAttribute("type", "text");
lastnameinput.setAttribute("id", "last-name");
lastnameinput.setAttribute("placeholder", "Enter Last Name");
lastnameinput.setAttribute("required", "");
lastnamediv.append(lastnameinput);

let addressdiv = document.createElement("div");
addressdiv.classList.add("form-group");
form.append(addressdiv);
let addresslabel = document.createElement("label");
addresslabel.setAttribute("for", "address");
addresslabel.innerHTML = "Address ";
addressdiv.append(addresslabel);
let addressinput = document.createElement("textarea");
addressinput.setAttribute("id", "address");
addressinput.setAttribute("row", "3");
addressinput.setAttribute("cols", "27");
addressinput.setAttribute("placeholder", "Enter Your Permanant Address");
addressinput.setAttribute("required", "");
addressdiv.append(addressinput);

let pincodediv = document.createElement("div");
pincodediv.classList.add("form-group");
form.append(pincodediv);
let pincodelabel = document.createElement("label");
pincodelabel.setAttribute("for", "pincode");
pincodelabel.innerHTML = "Pincode ";
pincodediv.append(pincodelabel);
let pincodeinput = document.createElement("input");
pincodeinput.setAttribute("type", "text");
pincodeinput.setAttribute("id", "pincode");
pincodeinput.setAttribute("placeholder", "Enter Area Code");
pincodeinput.setAttribute("required", "");
pincodediv.append(pincodeinput);

let statediv = document.createElement("div");
statediv.classList.add("form-group");
form.append(statediv);
let statelabel = document.createElement("label");
statelabel.setAttribute("for", "state");
statelabel.innerHTML = "State";
statediv.append(statelabel);
let stateinput = document.createElement("input");
stateinput.setAttribute("type", "text");
stateinput.setAttribute("id", "state");
stateinput.setAttribute("placeholder", "Enter State");
stateinput.setAttribute("required", "");
statediv.append(stateinput);

let countrydiv = document.createElement("div");
countrydiv.classList.add("form-group");
form.append(countrydiv);
let countrylabel = document.createElement("label");
countrylabel.setAttribute("for", "country");
countrylabel.innerHTML = "Country ";
countrydiv.append(countrylabel);
let countryinput = document.createElement("input");
countryinput.setAttribute("type", "text");
countryinput.setAttribute("id", "country");
countryinput.setAttribute("placeholder", "Enter Country");
countryinput.setAttribute("required", "");
countrydiv.append(countryinput);

let genderdiv = document.createElement("div");
genderdiv.classList.add("form-group");
form.append(genderdiv);
let genderp = document.createElement("div");
genderp.innerHTML = "Gender";
genderdiv.append(genderp);

let maleinput = document.createElement("input");
maleinput.setAttribute("type", "radio");
maleinput.setAttribute("name", "gender");
maleinput.setAttribute("value", "Male");
maleinput.setAttribute("required", "");
genderdiv.appendChild(maleinput);
let malelabel = document.createElement("label");
malelabel.innerHTML = "Male";
genderdiv.appendChild(malelabel);

let femaleinput = document.createElement("input");
femaleinput.setAttribute("type", "radio");
femaleinput.setAttribute("name", "gender");
femaleinput.setAttribute("value", "Female");
genderdiv.appendChild(femaleinput);
let femalelabel = document.createElement("label");
femalelabel.innerHTML = "Female";
genderdiv.appendChild(femalelabel);

let fooddiv = document.createElement("div");
fooddiv.classList.add(
  "form-group",
  "d-flex",
);
form.append(fooddiv);
let foodp = document.createElement("p");
foodp.innerHTML = "Pick Your Favorite Food";
fooddiv.append(foodp);

let ul = document.createElement("ul");
fooddiv.append(ul);

let food1input = document.createElement("input");
food1input.setAttribute("type", "checkbox");
food1input.setAttribute("name", "option");
food1input.setAttribute("value", "Chicken Biryani");
ul.appendChild(food1input);
let Food1label = document.createElement("label");
Food1label.innerHTML = "Chicken Biryani";
ul.appendChild(Food1label);

let food2input = document.createElement("input");
food2input.setAttribute("type", "checkbox");
food2input.setAttribute("name", "option");
food2input.setAttribute("value", "Fish Curry");
ul.appendChild(food2input);
let fodd2label = document.createElement("label");
fodd2label.innerHTML = "Fish Curry";
ul.appendChild(fodd2label);

let food3input = document.createElement("input");
food3input.setAttribute("type", "checkbox");
food3input.setAttribute("name", "option");
food3input.setAttribute("value", "Chinese");
ul.appendChild(food3input);
let food3label = document.createElement("label");
food3label.innerHTML = "Chinese";
ul.appendChild(food3label);

let food4input = document.createElement("input");
food4input.setAttribute("type", "checkbox");
food4input.setAttribute("name", "option");
food4input.setAttribute("value", "Idali Sambar");
ul.appendChild(food4input);
let food4label = document.createElement("label");
food4label.innerHTML = "Idali Sambar";
ul.appendChild(food4label);


let food5input = document.createElement("input");
food5input.setAttribute("type", "checkbox");
food5input.setAttribute("name", "option");
food5input.setAttribute("value", "Veg-Thali");
ul.appendChild(food5input);
let food5label = document.createElement("label");
food5label.innerHTML = "Veg-Thali";
ul.appendChild(food5label);


let sumbitdiv = document.createElement("div");
sumbitdiv.classList.add("form-group");
form.append(sumbitdiv);
let submitbutton = document.createElement("button");
submitbutton.setAttribute("id", "submit");
submitbutton.classList.add("btn", "btn-primary", "buttonstyle");
submitbutton.innerHTML = "Submit";
sumbitdiv.append(submitbutton);

let tablediv = document.createElement("div");
tablediv.classList.add("table-responsive", "form-group");
form.append(tablediv);

let tablemain = document.createElement("table");
tablemain.classList.add("table");
tablediv.append(tablemain);

let tablethead = document.createElement("thead");
tablemain.append(tablethead);

let tabletr = document.createElement("tr");
tablethead.append(tabletr);

let Idfortable = document.createElement("th");
Idfortable.innerHTML = "No";
tabletr.append(Idfortable);


let lastnamedata = document.createElement("th");
lastnamedata.innerHTML = "First Name";
tabletr.append(lastnamedata);

let firstnamedata = document.createElement("th");
firstnamedata.innerHTML = "Last Name";
tabletr.append(firstnamedata);

let Addressdata = document.createElement("th");
Addressdata.innerHTML = "Address";
tabletr.append(Addressdata);

let Pincodedata = document.createElement("th");
Pincodedata.innerHTML = "Pincode";
tabletr.append(Pincodedata);

let Statedata = document.createElement("th");
Statedata.innerHTML = "State";
tabletr.append(Statedata);

let Countrydata = document.createElement("th");
Countrydata.innerHTML = "Country";
tabletr.append(Countrydata);

let Genderdata = document.createElement("th");
Genderdata.innerHTML = "Gender";
tabletr.append(Genderdata);

let Fooddata = document.createElement("th");
Fooddata.innerHTML = "Food";
tabletr.append(Fooddata);

let tablettbody = document.createElement("tbody");
tablemain.append(tablettbody);


var sampleform = document.getElementById("form");
var dataTableBody = document.querySelector(".table tbody");
let counter = 1; 
sampleform.addEventListener("submit", function (event) {
  event.preventDefault();

  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var Address = document.getElementById("address").value;
  var Pincode = document.getElementById("pincode").value;
  var State = document.getElementById("state").value;
  var Country = document.getElementById("country").value;
  var Gender = getSelectedRadioValue("gender");
  var foodCheckBoxes = document.getElementsByName("option");
  var foodoptions = [];
  
  foodCheckBoxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      foodoptions.push(checkbox.value);
    }
  });

  if (foodoptions.length >= 2) {
    foodoptions.join(", ");
  } else {
    alert(" Select two options from the foods");
    return;
  }

  updateTable(counter,firstName,lastName,Address,Pincode,State,Country,Gender,foodoptions);
  counter++;
  sampleform.reset();
});

function updateTable(entryId,firstName,lastName,Address,Pincode,State,Country,Gender,foodoptions) {
  var newRow = dataTableBody.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  var cell8 = newRow.insertCell(7);
  var cell9 = newRow.insertCell(8);

  cell1.textContent = entryId; 
  cell2.textContent = firstName;
  cell3.textContent = lastName;
  cell4.textContent = Address;
  cell5.textContent = Pincode;
  cell6.textContent = State;
  cell7.textContent = Country;
  cell8.textContent = Gender;
  cell9.textContent = foodoptions;
  cell1.style.color = "black";
}

function getGenderValuebySelect(name) {
  var radios = document.getElementsByName(name);

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }

  return null;
}