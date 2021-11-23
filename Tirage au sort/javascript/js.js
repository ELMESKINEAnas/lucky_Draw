var apprenants =[];
let final = [] ;
let starting ;

    function lesNoms() {

        boxvalue = document.getElementById("nom");
        boxvalue1 = document.getElementById("sjt");

            if(boxvalue1.value == "" || boxvalue.value == ""){
                

                    return;
            }
            
           
                    
                    apprenants.push({
                        nom: boxvalue.value,
                        sjtVeille: boxvalue1.value});
                    addTo();


                    // console.log(apprenants);

                    boxvalue.value="";
                    boxvalue1.value="";
            
             
                    
                }

    function addTo(){

    let sortList = "";


    apprenants.forEach(element => {sortList +=  `
    <tr>
        <td>${element.nom}</td>
        <td>${element.sjtVeille}</td>
    </tr>`;
    })
    document.getElementById("show").innerHTML = `    <tr>
        <th>Nom</th>
        <th>Sujet de veille</th>

    </tr>`+sortList

} 

function start(){
    let sortList = "";
    let rand = Math.floor(Math.random()*apprenants.length);
    let Value = apprenants[rand];

    // document.getElementById("dcalc").style.display="none";


    let result = apprenants.splice(apprenants.indexOf(Value),1);

    let day = new Date(datePicker.value);

    if (day.getDate() ==0){
        day.setDate(day.getDate() + nextDay+1);
    }
    else if(day.getDate()==6){
          day.setDate(day.getDate() + nextDay+2);
        
    }else{
   day.setDate(day.getDate() + nextDay);
    }
 
    
    let dd = String(day.getDate()).padStart(2, "0");
    let mm = String(day.getMonth() + 1).padStart(2, "0");
    let yyyy = day.getFullYear();

    let theDate = dd+"/"+mm+"/"+yyyy;

    nextDay++;

    Value.date = theDate

    final.push(Value);
    console.log(final);
    final.forEach(element => {
    sortList +=  `
    <tr>
        <td >${element.nom}</td>
        <td >${element.sjtVeille}</td>
        <td> ${element.date}
    </tr>`;
    })

    document.getElementById("res").innerHTML = `   
     <tr>
        <th>Nom</th>
        <th>Sujet de veille</th>
        <th>Date</th>

    </tr>`+sortList
    

    addTo();

    

    console.log(apprenants,final);
}





const datePicker = document.querySelector("#datePicker");
datePicker.min = new Date().toLocaleDateString("en-ca");

datePicker.value = new Date().toLocaleDateString("en-ca");

datePicker.addEventListener("change", (e) => {
  const day = new Date(datePicker.value).getUTCDay();
  starting=datePicker.value
  console.log(starting);
  if ([0].includes(day)) {
    // e.preventDefault();
    ifSun = new Date(datePicker.value)
   ifSun.setDate(ifSun.getDate()+1)

    datePicker.value = ifSun.toLocaleDateString("en-ca")
   
    return false;
  } else if ([6].includes(day)) {
    // e.preventDefault();
    ifSat = new Date(datePicker.value)
   ifSat.setDate(ifSat.getDate()+2)

    datePicker.value = ifSat.toLocaleDateString("en-ca")
   
  }
});

let nextDay=0;










