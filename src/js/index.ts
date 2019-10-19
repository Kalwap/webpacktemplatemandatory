document.getElementById("rowinput").addEventListener("click",AdditionTolist);
let TabCaseSelect : HTMLSelectElement = <HTMLSelectElement>document.getElementById("tabcaseselect");
let list = document.getElementById("listofstring");
let ClearInput : HTMLSelectElement = <HTMLSelectElement>document.getElementById("clearinput");



function AdditionTolist()
{
    let result = ClearInput.value;
    let newlist = document.createElement("newlist");
    switch(TabCaseSelect.value)
    {
        case "UpperCase":
        newlist.innerHTML = result.toUpperCase();
        break;
        case "LowerCase":
        newlist.innerText = result.toLowerCase();
        break;
        
    
    }
    list.appendChild(newlist);



}
