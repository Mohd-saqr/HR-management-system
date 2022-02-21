var y = document.getElementById('table')

let newarr = []
window.addEventListener('load', function () {
    let person = document.getElementById('person');
    person.addEventListener('submit', function () {
        event.preventDefault();
        let fullname = event.target.Fullname.value
        let Departmentid = event.target.Departmentid.value
        let Levelid = event.target.Levelid.value
    
        let id = geId()
        let p = new employ(id, fullname, Departmentid, Levelid)
        add(p)
    });
    read()
})





function employ(idv, Fullnamev, Departmentv, Levelv, Imagev, Salaryv) {
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
            i = getRndInteger(1500, 2000);
            net = i - (i * 0.075); break;
        case "Mid-Senior":
            i = getRndInteger(1000, 1500);
            net = i - (i * 0.075); break;
        case "Junior":
            i = getRndInteger(500, 1000);
            net = i - (i * 0.075);
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



// function handel(event){


// }
function geId() {
    let ran = Math.floor(Math.random() * 10000)
    return ran
}



function add(obj) {
    var table = document.getElementById('table')
    var namei = document.getElementById('name')
    var dei = document.getElementById('depart')
    var sly = document.getElementById('sa')
    let o = obj.Salaryc()
    var row = `<tr>
        <td>${obj.id}</td>
        <td>${obj.Fullname}</td>
        <td>${obj.Department}</td>
        <td>${obj.Level}</td>
        <td><img src="./assest/card.png" alt=""></td>
        <td>${o}</td>
        </tr>
        `
    obj.addPhoto()

    table.innerHTML += row
    //   namei.textContent =`Name: ${obj.Fullname} - ID: ${obj.id}`
    //   sly.textContent = o
    //   dei.textContent=`Development: ${obj.Department} - Level: ${obj.Level}
    //  `
    let person = { id: `${obj.id}`, fn: `${obj.Fullname}`, de: `${obj.Department}`, le: ` ${obj.Level}`, o: `${o}` }

    // ${obj.id}
    // ${obj.Fullname}
    // ${obj.Department}
    // ${obj.Level}
    // ${o}

    let jsonArray = JSON.stringify(person);
    newarr.push(jsonArray)
    localStorage.setItem(obj.id, newarr);
    newarr=[]
   

}
// function checklocal() {
//     if (localStorage.getItem('person') !== null) {
//         console.log("1");
//         let oldPerson = localStorage.getItem('person')
//         newarr.push(oldPerson)
//     }


// }
employ.prototype.addPhoto = function () {
    let Card = document.getElementById('card')
    let o = this.Salaryc()
    let ifo = `<div class="card1">
  <img src="/assest/card.png" alt="">
  <p>Name: ${this.Fullname} - ID: ${this.id}
  </p>
  <p>Development: ${this.Department} - Level: ${this.Level}</p>
  <p>${o}</p>
  </div>`
    Card.innerHTML += ifo
}
function read() {
 var y = document.getElementById('table')
  
for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    
   let obect = JSON.parse(value)
        var newrow = `<tr>
        <td>${key}</td>
        <td>${obect.fn}</td>
        <td>${obect.de}</td>
        <td>${obect.le}</td>
        <td><img src="./assest/card.png" alt=""></td>
        <td>${obect.o}</td>
        </tr>
        `
        let Card = document.getElementById('card')
        
        let ifo = `<div class="card1">
      <img src="/assest/card.png" alt="">
      <p>Name: ${obect.fn} - ID: ${key}
      </p>
      <p>Development: ${obect.de} - Level: ${obect.le}</p>
      <p>${obect.o}</p>
      </div>`
        Card.innerHTML += ifo
        y.innerHTML += newrow
     
    
    console.log( obect);  
  
  }
     
    }
    
    





