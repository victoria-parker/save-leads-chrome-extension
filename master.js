let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    renderLeads(myLeads)
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value) 
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads(myLeads)
})

function renderLeads(leads){
    let listItem=""
    for(let i=0;i<leads.length;i++){
    listItem+=`<li><a href="${leads[i]}">${leads[i]}</a></li>`
    }
    ulEl.innerHTML= listItem
}

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    renderLeads(myLeads)
})