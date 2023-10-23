const  myLeads = [ ]
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ulEl");


inputBtn.addEventListener("click",() => {
     myLeads.push(inputEl.value)
     console.log(myLeads);

     inputEl.value = " ";

     renderLeads();     
});

inputBtn.addEventListener()
// Wrapped the code under the function below.
function renderLeads(){
     let listItems = " "; 
     for (let i = 0; i < myLeads.length; i++) {

     listItems += "<li>" + myLeads[i] + "</li>"
     console.log(listItems);
 }

ulEl.innerHTML = listItems
     
}


