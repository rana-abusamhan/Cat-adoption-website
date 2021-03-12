

const form = document.getElementById("form");
const result = document.getElementById("list");
let arr=[];



function ToDo(name,breed,age,color){
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.color = color;

  arr.push(this);
}

function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const breed = document.getElementById("breed").value;
  const age = document.getElementById("age").value;
  const color = document.getElementById("color").value;
  let obj = new ToDo(name,breed,age,color);
  save(); 
 render();

}

function save(){
  let str = JSON.stringify(arr);
  localStorage.setItem('data',str);
}


function render(){
  result.innerHTML = '';

  let data = localStorage.getItem("data");
  let x = JSON.parse(data);

 if(x){
  let tbl = document.createElement("table");
  result.appendChild(tbl);
     
    let caption= document.createElement("caption");
    tbl.appendChild(caption);
    caption.textContent ="Inserted cats"; 
     
  for(let i=0; i<x.length;i++){
      
    let row = document.createElement("tr");
    tbl.appendChild(row);
      
      
    let cell1 = document.createElement("td");
    row.appendChild(cell1);
    cell1.textContent =i; 
      
    let cell2 = document.createElement("td");
    row.appendChild(cell2);
    cell2.textContent = x[i].name; 
             
    let cell3 = document.createElement("td");
    row.appendChild(cell3);
    cell3.textContent = x[i].breed;   

    let cell4 = document.createElement("td");
    row.appendChild(cell4); 
    cell4.textContent = x[i].age;   
      
    let cell5 = document.createElement("td");
    row.appendChild(cell5);
    cell5.textContent = x[i].color;   
  }
 }
  
}


form.addEventListener('submit',handleSubmit)

render();
