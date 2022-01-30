


let newarr = []
window.addEventListener('load', function () {
    var Developmentn = document.getElementById('Developmentn')
    var Developmentt= document.getElementById('Developmentt')
    var Developmenta = document.getElementById('Developmenta')
    var Administrationn = document.getElementById('Administrationn')
    var Administrationt = document.getElementById('Administrationt')
    var Administrationa = document.getElementById('Administrationa')
    var Marketingn = document.getElementById('Marketingn')
    var Marketingt = document.getElementById('Marketingt')
    var Marketinga = document.getElementById('Marketinga')
    var Financen = document.getElementById('Financen')
    var Financet = document.getElementById('Financet')
    var Financea = document.getElementById('Developmenta')
    var infon = document.getElementById('infon')
    var infot = document.getElementById('infot')
    var infoa = document.getElementById('infoa')
    var table = document.getElementById("employt");
   
    
})
window.onload = function() {
  if(localStorage.length!=0){
      read()
    }
}

function read() {
  let n =0
  let n1=0
  let n2=0
  let n3=0
  let n4=0
  let total=0
  let total1=0
  let total2=0
  let total3=0
  let total4=0
  let total5=0
  let total6=0
  let total7=0
  let total8=0
  let total9=0
  let total10=0
  let total11=0
  let total12=0
   let totalSalary=0
   let avgSalary=0

  // var y = document.getElementById('table')
 for (var i = 0; i < localStorage.length; i++) {
     var key = localStorage.key(i);
     var value = localStorage.getItem(key);
    let obect = JSON.parse(value)
    
    let t = Administrationn.textContent
    switch(obect.de){
      case "Administration":
        n+=1
        total1 =parseFloat(obect.o)
      total2 += total1
      Administrationt.textContent = total2
      total3 =total2/n
      Administrationa.textContent = Math.floor( total3) 
        
        Administrationn.textContent = n ;break
      case "Marketing":
        n1 +=1
        total4 =parseFloat(obect.o)
        total5+=total4
        Marketingt.textContent=total5
        total6=total5/n1
        Marketinga.textContent=total6
        Marketingn.textContent= n1;break
        case "Development":
          n2 +=1
          total7=parseFloat(obect.o)
          total8+=total7
          Developmentt.textContent=total8
          total9=total8/n2
          Developmenta.textContent=total9
          Developmentn.textContent=n2;break
        case "Finance":
          n3 +=1
          total10=parseFloat(obect.o)
          total11 +=total10
          Financet.textContent=total11
          total12=total11/n3
          Financea.textContent=total12

          Financen.textContent = n3

  }
  total = n+n1+n2+n3
  totalSalary=total2 +total5+total8+total11
  infot.textContent = "Total Salary :  " + totalSalary
  infon.textContent= "Total employer  : "  +total
  avgSalary =total7=parseFloat(totalSalary/total)
 

  infoa.textContent=  "Avareg Salary  : "+avgSalary
 }
    
     }

     function exportData(){

      var rows =[];
      for(var i=0; row = table.rows[i];i++){
          co1 = row.cells[0].innerText;
          co2 = row.cells[1].innerText;
          co3 = row.cells[2].innerText;
          co4 = row.cells[3].innerText;
          // column5 = row.cells[4].innerText;
  
      /* add a new records in the array */
          rows.push(
              [
                  co1,
                  co2,
                  co3,
                  co4,
                  // column5
              ]
          );
  
          }
          csvContent = "data:text/csv;charset=utf-8,";
           /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
          rows.forEach(function(rowArray){
              row = rowArray.join(",");
              csvContent += row + "\r\n";
          });
  
          /* create a hidden <a> DOM node and set its download attribute */
          var encodedUri = encodeURI(csvContent);
          var link = document.createElement("a");
          link.setAttribute("href", encodedUri);
          link.setAttribute("download", "Stock_Price_Report.csv");
          document.body.appendChild(link);
           /* download the data file named "Stock_Price_Report.csv" */
          link.click();
  }

 







