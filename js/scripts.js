document.getElementById("adicionar").addEventListener("click", createTask);

//Sortable.js
const Dragarea = document.getElementsByClassName("container")[0];
new Sortable(Dragarea , {
handle: '.bi-list',
animation: 300
})


//Retorna data + hora atual no formato: "DD/MM/YYY <br> HH:HH"
function getDate(){
    const data = new Date();
    const yyyy = data.getFullYear();
    let mm = data.getMonth() + 1; // Months start at 0!
    let dd = data.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    var agora = dd + '/' + mm + '/' + yyyy;

    return agora + '<br>' + data.getHours() + ':' + String(data.getMinutes()).padStart(2, "0");
}


function getTaskText(){
    return document.querySelector("#taskContent").value;
}

function cleanTaskText(){
    document.querySelector("#taskContent").value = "";
    document.querySelector("#taskContent").focus();
}



function createTask(){
    let task = document.createElement('div');
    task.className = 'task-row';
    task.style.display = 'flex';

    
    let taskDate = document.createElement('div');
    taskDate.className = 'date content';
    

    let taskDateDiv = document.createElement('div');
    taskDateDiv.innerHTML = getDate();
    

    
    let btn2 = document.createElement('a')
    let ico2 = document.createElement('i');
    ico2.className = 'bi bi-square'; 
    btn2.appendChild(ico2);



    taskDate.appendChild(taskDateDiv);
    taskDate.appendChild(btn2);



    let taskContent = document.createElement('div');
    taskContent.className = 'task content';    
    taskContent.innerHTML = getTaskText();

    let taskButtons = document.createElement('div');
    taskButtons.className = 'buttons content';

        let btn1 = document.createElement('a')
        let ico1 = document.createElement('i');
        ico1.className = 'bi bi-trash'; 
        btn1.appendChild(ico1);


        

        let btn3 = document.createElement('a')
        let ico3 = document.createElement('i');
        ico3.className = 'bi bi-list'; 
        btn3.appendChild(ico3);
    
   
            taskButtons.appendChild(btn1);
            taskButtons.appendChild(btn3);

        
    task.appendChild(taskDate);
    task.appendChild(taskContent);
    task.appendChild(taskButtons);

    document.querySelector('.container').appendChild(task);

   cleanTaskText();



   //Função dos botões: Excluir, Feito
    btn1.addEventListener('click', () => task.remove());

    // btn2.addEventListener('click', () => taskContent.className += " done");
    btn2.addEventListener('click', function(){
        if(taskContent.className == 'task content'){
            taskContent.className += " done";
            ico2.className = "bi bi-check-square";
        }else{
            taskContent.className = 'task content';  
            ico2.className = "bi bi-square";
        }
        });
        
}