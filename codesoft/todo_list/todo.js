const input = document.getElementById("input");
const task = document.getElementById("tasks");

function AddTask() {
    if (input.value === '') {
        alert("You must add something");
    } else {
        let li = document.createElement("li"); 
        li.innerHTML = input.value; 
        task.appendChild(li); 
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveData();
}
task.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false);

function saveData(){
    localStorage.setItem("data",task.innerHTML);
}
function showdata(){
    task.innerHTML=localStorage.getItem("data");
}
showdata();


