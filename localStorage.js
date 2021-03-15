
document.getElementById("form").addEventListener('submit',handleSubmit);
const InsertedCats = document.getElementById("InsertedCats");
let arr=[];


function cat(name,breed,age,color){  
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.color = color;

  arr.push(this);
}



function handleSubmit(event){
  event.preventDefault();
  const name = document.getElementById("name").value;
  const breed = document.getElementById("breed").value;
  const age = document.getElementById("age").value;
  const color = document.getElementById("color").value;
  let obj = new cat(name,breed,age,color);
  convertToString(); 
  showInsertedCats();
}



function convertToString(){
  let text = JSON.stringify(arr);   // convert a JavaScript object into a string
  localStorage.setItem('data',text);
}


function showInsertedCats(){
  InsertedCats.innerHTML = ''; 

  let data = localStorage.getItem("data");
  let obj = JSON.parse(data);   // Convert string into a JavaScript object

 if(obj){
  let tbl = document.createElement("table");
  InsertedCats.appendChild(tbl);
     
    let caption= document.createElement("caption");
    tbl.appendChild(caption);
    caption.textContent ="Inserted cats"; 
     
  for(let i=0; i<obj.length;i++){
      
    let row = document.createElement("tr");
    tbl.appendChild(row);
      
      
    let cell1 = document.createElement("td");
    row.appendChild(cell1);
    cell1.textContent =i; 
      
    let cell2 = document.createElement("td");
    row.appendChild(cell2);
    cell2.textContent = obj[i].name; 
             
    let cell3 = document.createElement("td");
    row.appendChild(cell3);
    cell3.textContent = obj[i].breed;   

    let cell4 = document.createElement("td");
    row.appendChild(cell4); 
    cell4.textContent = obj[i].age;   
      
    let cell5 = document.createElement("td");
    row.appendChild(cell5);
    cell5.textContent = obj[i].color;   
  }
 }
  
}




