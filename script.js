const myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ulEl");

inputBtn.addEventListener("click", () => {
  const inputValue = inputEl.value.trim();
  if (inputValue !== "") {
     myLeads.push(inputEl.value);
    inputEl.value = " ";
    renderLeads();
  }
});

// Wrapped the code under the function below.
function renderLeads() {
  let listItems = " ";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
                                 <a target='_blank' href='${myLeads[i]}'>
                                   ${myLeads[i]}
                         </li>`;

    console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}
