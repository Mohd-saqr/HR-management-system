function employ(idv,Fullnamev, Departmentv, Levelv, Imagev, Salaryv) {
    this.id = idv
    this.Fullname = Fullnamev;
    this.Department = Departmentv;
    this.Level = Levelv;
    this.img = Imagev;
}
function getRndInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // Math.floor(Math.random() * (max - min)) + min;
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
             i =  Math.random(500, 1000); 
             net= i-(i*0.075);break;
    }
    return net;
    
}

const p1=new employ(100,"Ghazi Samer","Administratio","Senior");
const p2=new employ(1001,"Lana Ali","Finance","Senior");
const p3=new employ(1002,"Tamara Ayoub","Marketing","Senior");
const p4=new employ(1003,"Safi Walid","Administratio","Mid-Senior");
const p5=new employ(1004,"Omar Zaid","Development","Senior");
const p6=new employ(1005,"Rana Saleh","Development","Junior");
const p7=new employ(1006,"Hadi Ahmad","Finance","Mid-Senior");


window.onload=() =>{
    add(p1)
    add(p2)
    add(p3)
    add(p4)
    add(p5)
    add(p6)

}


console.log(p1.Salaryc());
function add(obj){
    var table=document.getElementById('table')
    var row=`<tr>
    <td>${obj.id}</td>
    <td>${obj.Fullname}</td>
    <td>${obj.Department}</td>
    <td>${obj.Level}</td>
    <td><a href="${obj.img}"></a></td>
    <td>${p1.Salaryc()}</td>
    </tr>
    `
    table.innerHTML += row
}