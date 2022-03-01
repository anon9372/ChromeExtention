

let myLeads = []


const inputEl = document.getElementById("input-el")

const Button = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delButton = document.getElementById("del-btn")
const tabButton = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}




tabButton.addEventListener('click', function () {
    // console.log(tabs[0].url)


    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)

    });



})


function renderLeads(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {

        // listItems += "<li><a href=' " + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
        // console.log(listItems)

        listItems += `<li><a href=${leads[i]} target="_blank">${leads[i]}</a> </li>`
    }
    ulEl.innerHTML = listItems
}




delButton.addEventListener("dblclick", function () {

    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})




Button.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    // console.log("Button clicked!")
    inputEl.value = ""
    // myLeads = JSON.stringify(myLeads)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads(myLeads)

    // console.log(localStorage.getItem("myLeads"))
})

