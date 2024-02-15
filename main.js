// 유저는 할 일을 추가할 수 있다.
// 각 할 일에 삭제와 체크 버튼이 있다.
// 삭제 버튼을 누르면 할 일이 리스트에서 사라진다.
// 체크 버튼을 누르면 할 일이 끝난 것으로 간주하고 삭제선이 그어진다.
// 끝나 할 일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
// 탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
// 모바일 버전에서도 볼 수 있는 반응형 웹이다.

let inputText = document.getElementById("input-text");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");
let taskList = [];
let filterList = [];
let mode = "all";

for (let i=1; i<tabs.length; i++){
    tabs[i].addEventListener("click",function(event){
        filter(event);
    });
}

addButton.addEventListener("click",addtask);
inputText.addEventListener("keyup",enterKey);

function enterKey(event){
    if (event.key === "Enter"){
        addtask();
    }
}

function addtask(){
    let taskValue = inputText.value;
    if (taskValue == ""){
        return;
    } else {
    let task = {
        id: randomIdGenerate(),
        inputTextValue: taskValue,
        isComplete: false
    }
    taskList.push(task);
    inputText.value = "" ;
    render();
    }
}

console.log(taskList);

function render(){
    let list = [];
    if (mode === "all"){
        list = taskList;
    } else if (mode === "ongoing" || mode === "done"){
        list = filterList;
    } 
    let resultHTML = "";
    for (let i=0; i<list.length; i++){
        if (list[i].isComplete === true) {
        resultHTML+= `<div class = "task">
                        <div class = "task-done task-content" id = ${list[i].id}">${list[i].inputTextValue}</div>
                        <div class = "button-box">
                        <button onclick = "toggleComplete('${list[i].id}')">
                            <i class="fa-solid fa-rotate-right" id = "reload-button"></i>
                        </button>
                        <button onclick = "deleteTask('${list[i].id}')">
                            <i class="fa-regular fa-trash-can" id = "delete-button"></i>
                        </button>
                        </div>
                    </div>`
        } else {
        resultHTML+= `<div class = "task">
                        <div class = "task-content" id = ${list[i].id}">${list[i].inputTextValue}</div>
                        <div class = "button-box">
                        <button onclick = "toggleComplete('${list[i].id}')">
                            <i class="fa-solid fa-check" id = "check-button"></i>
                        </button>
                        <button onclick = "deleteTask('${list[i].id}')">
                            <i class="fa-regular fa-trash-can" id = "delete-button"></i>
                        </button>
                        </div>
                    </div>`
        }
    }
    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id){
    for (let i=0; i<taskList.length; i++){
        if (taskList[i].id === id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    filter();
}

function deleteTask(id){
    for (let i=0; i<taskList.length;i++){
        if (taskList[i].id === id){
            taskList.splice(i,1);
            break;
        }
    }
    filter();
}

function filter(event){
    mode = event.target.id;
    filterList = [];
    if (mode === "all") {
        // render();

    } else if (mode === "ongoing"){
        for (let i=0; i<taskList.length; i++){
            if (taskList[i].isComplete === false){
                filterList.push(taskList[i]);
            }
        }
        console.log(filterList);

    } else if (mode === "done"){
        for (let i=0; i<taskList.length; i++){
            if (taskList[i].isComplete === true){
                filterList.push(taskList[i]);
            }
        }
    }
    render();
}

function randomIdGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}
