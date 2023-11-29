let nav1 = document.createElement("nav")
nav1.innerHTML = `<div class= "container-fluid">
<h1  class = "text-center pt-2 pb-2" id ="title" style ="color : white" >Dom manipulation with forms</h1>
</div>`
document.body.append(nav1);

const Container1 = document.createElement("div");
Container1.setAttribute("class","container")

const Row1 = document.createElement("div")
Row1.setAttribute("class","row")

const Column1 = document.createElement("div")
Column1.setAttribute("class","container col-md-6 mt-4")

const form1 = document.createElement("form")
form1.setAttribute("id","form")

const div1 = document.createElement("div")
div1.setAttribute("class","form-group mb-3")
div1.innerHTML= `<label for = "fname" class ="form-label">First Name</label>`
var firstname = document.createElement("input")
firstname.setAttribute("type","text")
firstname.setAttribute("class","form-control")
firstname.setAttribute("id","first-name")
firstname.setAttribute("placeholder","Enter First Name")
firstname.setAttribute("required","")
div1.append(firstname)
form1.append(div1)

const div2 = document.createElement("div")
div2.setAttribute("class"," form-group mb-3")
div2.innerHTML= `<label for = "lname" class ="form-label">Last Name</label>`
var lastname = document.createElement("input")
lastname.setAttribute("type","text")
lastname.setAttribute("class","form-control")
lastname.setAttribute("id","last-name")
lastname.setAttribute("placeholder","Enter Last Name")
lastname.setAttribute("required","")
div2.append(lastname)
form1.append(div2)

const div3 = document.createElement("div")
div3.setAttribute("class"," form-group mb-3")
div3.innerHTML= `<label for = "address" class ="form-label">Address</label>`
var address = document.createElement("textarea")
address.setAttribute("type","text")
address.setAttribute("class","form-control")
address.setAttribute("id","address")
address.setAttribute("placeholder","Enter Address")
address.setAttribute("required","")
div3.append(address)
form1.append(div3)

const div4 = document.createElement("div")
div4.setAttribute("class"," form-group mb-3")
div4.innerHTML= `<label for = "pincode" class ="form-label">Pincode</label>`
var pincode = document.createElement("input")
pincode.setAttribute("type","text")
pincode.setAttribute("class","form-control")
pincode.setAttribute("id","pincode")
pincode.setAttribute("placeholder","Enter Pincode")
pincode.setAttribute("required","")
div4.append(pincode)
form1.append(div4)

const div5 = document.createElement("div")
div5.setAttribute("class"," form-group mb-3")
div5.innerHTML= `<label class = "form-label">Gender</label>
<div class= "form-check">
      <input class ="form-check-input" type = "radio" value = "Male" name ="flexRadioDefault" id ="male">
      <label class="form-check-label" for="male">Male</label>
</div>
<div class="form-check">
    <input class="form-check-input" type="radio" value = "Female" name="flexRadioDefault" id="female" >
    <label class="form-check-label" for="female">Female</label>
</div>`;
form1.append(div5)

const div6 = document.createElement("div")
div6.setAttribute("class", "from-group mb-3")
div6.innerHTML= `<label class ="form-label">Choice of foods</label>
<div class= "form-check">
      <input class = "form-check-input" type= "checkbox" value = "Chappathi" id= "chappathi" name = "options" >
      <label class= "form-check-label" for = "chappathi"> Chappathi </label>
</div>

<div class= "form-check">
      <input class = "form-check-input" type= "checkbox" value = "Idli" id= "idli" name = "options" />
      <label class= "form-check-label" for = "idli"> Idli </label>
</div>

<div class= "form-check">
      <input class = "form-check-input" type= "checkbox" value = "Dosai" id= "dosai" name = "options" />
      <label class= "form-check-label" for = "dosai"> Dosai </label>
</div>

<div class= "form-check">
      <input class = "form-check-input" type= "checkbox" value = "Poori" id= "poori" name = "options" />
      <label class= "form-check-label" for = "poori"> Poori </label>
</div>

<div class= "form-check">
      <input class = "form-check-input" type= "checkbox" value = "Pongal" id= "pongal" name = "options" />
      <label class= "form-check-label" for = "pongal"> Pongal </label>
</div>`
form1.append(div6)

const div7 = document.createElement("div")
div7.setAttribute("class","form-group mb-3")
div7.innerHTML = `<label for = "state" class ="form-label">State</label>
<input type = "text" class="form-control" id= "state" placeholder = "Enter State"/>`
form1.append(div7)

const div8 = document.createElement("div")
div8.setAttribute("class","form-group mb-3")
div8.innerHTML = `<label for = "country" class = "form-label">Country</label>
<input type = "text" class = "form-control" id = "country" placeholder = "Enter country"/>`
form1.append(div8)

n_button = document.createElement("button")
n_button.setAttribute("class","btn btn-primary")
n_button.setAttribute("id","submit")
n_button.setAttribute("value","")
n_button.innerText= "Submit";
form1.append(n_button)

Column1.append(form1)
Row1.append(Column1)
Container1.append(Row1)
document.body.append(Container1)

const Container2 = document.createElement("div")
Container2.setAttribute("class","container")

const Row2 = document.createElement("div")
Row2.setAttribute("class", "row")

const Column2 = document.createElement("div")
Column2.setAttribute("class", "container col md-6 mt-4")

const n_div= document.createElement("div");
n_div.setAttribute("class","mt-5");
n_div.innerHTML=`<h4 class="bg-light text-center pt-2 pb-2">User Table</h4>
<p id="description" class="text-center">This below User Table hold the user entered information only</p>`;
Column2.append(n_div);
Row2.append(Column2);

const Row3 = document.createElement("div");
Row3.setAttribute("class","row mt-4");
Row3.innerHTML=` <table id="userTable" class="table table-striped">
<thead>
  <tr>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Address</th>
    <th scope="col">Pincode</th>
    <th scope="col">Gender</th>
    <th scope="col">Choice of foods</th>
    <th scope="col">State</th>
    <th scope="col">Country</th>
  </tr>
</thead>
<tbody class="tablebody" id ="tablebody">
</tbody>
</table>`;

Container2.append(Row2);
Container2.append(Row3);
document.body.append(Container2);

let form_button = document.getElementById("submit");
form_button.addEventListener('click',(event)=>{
  event.preventDefault();
 let checkboxes = document.querySelectorAll('input[name="option"]:checked');
 let values =[];
 checkboxes.forEach((checkbox)=>{
  values.push(checkbox.value);
 });

document.getElementById(
       "tablebody"
      ).innerHTML=`<tr>
      <td> ${document.getElementById("first-name").value}</td>
      <td> ${document.getElementById("last-name").value}</td>
      <td> ${document.getElementById("address").value}</td>
      <td> ${document.getElementById("pincode").value}</td>
      <td>${document.querySelector('input[name="flexRadioDefault"]:checked').value}</td>
      <td>${values}</td>
      <td> ${document.getElementById("state").value}</td>
      <td> ${document.getElementById("country").value}</td>
                   </tr> `;

document.getElementById("form").reset();
});

