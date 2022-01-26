

window.addEventListener('load',function(){
let person = document.getElementById('person');
person.addEventListener('submit',function(){
    event.preventDefault();
    let fullname = event.target.Fullname.value
    let Departmentid = event.target.Departmentid.value
    let Levelid= event.target.Levelid.value
    let id = geId()
    let p =new employ(id,fullname,Departmentid,Levelid)
    add(p)
} );
})

function employ(idv,Fullnamev, Departmentv, Levelv, Imagev, Salaryv) {
    this.id = idv
    this.Fullname = Fullnamev;
    this.Department = Departmentv;
    this.Level = Levelv;
    this.img = Imagev;
}
function getRndInteger(min, max) {
   
    return Math.trunc(Math.floor(Math.random() * (max - min)) + min)
    
  }

employ.prototype.Salaryc = function () {
    var i;
    var net;
    switch (this.Level) {
        case "Senior":
           i =  getRndInteger(1500,2000);
           net= i-(i*0.075);break;
        case "Mid-Senior":
            i =  getRndInteger(1000,1500);
            net= i-(i*0.075);break;
        case "Junior":
             i =  getRndInteger(500,1000); 
             net= i-(i*0.075);
    }
    return net;
    
}

// const p1=new employ(100,"Ghazi Samer","Administratio","Senior");
// const p2=new employ(1001,"Lana Ali","Finance","Senior");
// const p3=new employ(1002,"Tamara Ayoub","Marketing","Senior");
// const p4=new employ(1003,"Safi Walid","Administratio","Mid-Senior");
// const p5=new employ(1004,"Omar Zaid","Development","Senior");
// const p6=new employ(1005,"Rana Saleh","Development","Junior");
// const p7=new employ(1006,"Hadi Ahmad","Finance","Mid-Senior");


// window.onload=(obj) =>{
//     add(obj)
  

// }
// function handel(event){
  
   
// }
function geId(){
    let ran =Math.floor(Math.random() * 100)
    return ran
}



function add(obj){
    var table=document.getElementById('table')
var  namei =document.getElementById('name')
var dei=document.getElementById('depart')
var sly=document.getElementById('sa')
let o = obj.Salaryc()
    var row=`<tr>
    <td>${obj.id}</td>
    <td>${obj.Fullname}</td>
    <td>${obj.Department}</td>
    <td>${obj.Level}</td>
    <td><a href="${obj.img}"></a></td>
    <td>${o}</td>
    </tr>
    `
    table.innerHTML += row
    namei.textContent =`Name: ${obj.Fullname} - ID: ${obj.id}`
    sly.textContent = o
    dei.textContent=`Development: ${obj.Department} - Level: ${obj.Level}
   `

    
    
}



 
