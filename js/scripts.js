document.getElementById("adicionar").addEventListener("click", addTask);

//Sortable.js
const Dragarea = document.getElementsByClassName("container")[1];
new Sortable(Dragarea , {
animation: 400
})


//Data
const data = new Date();
const yyyy = data.getFullYear();
let mm = data.getMonth() + 1; // Months start at 0!
let dd = data.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

var agora = dd + '/' + mm + '/' + yyyy;

//Força hora para o formado XX:XX
var hora = data.getHours() + ':' + String(data.getMinutes()).padStart(2, "0");


var taskList = document.getElementsByClassName('container')[1]
//Parâmetros: )texto
function addTask(){
    //alert('oi')
    let task = document.createElement('div');
    task.className = "task-row";
    task.style.display = "flex";

    let taskContent = document.querySelector("#taskContent").value;
    //alert(taksContent);
    

    //task.innerHTML = '<div class="date content">19/06/2022<br>16:33</div><div class="task content"> ' +  taksContent + '</div><div class="done content"><a href=""><i class="bi bi-check"></i></a></div><div class="delete content"><a href=""><i class="bi bi-trash"></i></a></div><div class="menu content"><a href=""><i class="bi bi-list"></i></a></div>';
    task.innerHTML = '<div class="date content"> ' + agora + '<br>'+ hora + '</div><div class="task content"> ' + taskContent + '</div><div class="buttons content"><a href=""><i class="bi bi-check"></i></a><a href=""><i class="bi bi-trash"></i></a><a href=""><i class="bi bi-list"></i></a></div>';

    taskContent.innerHTML = '';
    document.getElementsByClassName('container')[1].appendChild(task);

}


//Objetos (Exemplo Ruim)

//Etruturas Condicionais
//For, forin, for off, while, do while