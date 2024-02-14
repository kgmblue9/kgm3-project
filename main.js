// 유저는 할 일을 추가할 수 있다.
// 각 할 일에 삭제와 체크 버튼이 있다.
// 삭제 버튼을 누르면 할 일이 리스트에서 사라진다.
// 체크 버튼을 누르면 할 일이 끝난 것으로 간주하고 삭제선이 그어진다.
// 끝나 할 일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
// 탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
// 모바일 버전에서도 볼 수 있는 반응형 웹이다.

let inputText = document.getElementById("input-text");
let addButton = document.getElementById("add-button");
let underline = document.getElementById("under-line");
let allButton = document.getElementById("all-button");
let notDoneButton = document.getElementById("not-done-button");
let doneButton = document.getElementById("done-button");
let taskList = [];

addButton.addEventListener("click",addtask);
inputText.addEventListener("keyup",enterKey);
allButton.addEventListener("click",clickAll);
notDoneButton.addEventListener("click",clickNotDone);
doneButton.addEventListener("click",clickDone);

console.log(underline);
console.log(allButton);
console.log(notDoneButton);
console.log(doneButton);

function clickAll(){
    underline = `<div id = "under-line"></div>`;
}

function clickNotDone(){
    underline.innerHTML = "";
    resultHTML = `<div id = "not-done-under-line"></div>`;
    underline.innerHTML = resultHTML;

    
    console.log(underline);
    for (let i=0; i<taskList.length; i++){
        if (taskList[i].isComplete == false){
            // render();
            console.log(taskList[i].isComplete);
        }
    }
}

function clickDone(){
    underline = `<div id = "done-under-line"></div>`;
}

function enterKey(event){
    if (event.key === "Enter"){
        addtask();
    }
}

function addtask(){
    if (inputText.value == ""){
        return;
    } else {
    let task = {
        id: randomIdGenerate(),
        inputTextValue: inputText.value,
        isComplete: false
    }
    taskList.push(task);
    inputText.value = "" ;
    render();
    }
}

console.log(taskList);

function render(){
    let resultHTML = '';
    for (let i=0; i<taskList.length; i++){
        if (taskList[i].isComplete == true) {
        resultHTML+= `<div class = "task">
                        <div class = "task-done task-content">${taskList[i].inputTextValue}</div>
                        <div>
                        <button onclick = "toggleComplete('${taskList[i].id}')">
                            <i class="fa-solid fa-rotate-right" id = "reload-button"></i>
                        </button>
                        <button id = "delete-button" onclick = "deleteTask('${taskList[i].id}')">
                            <i class="fa-regular fa-trash-can" id = "delete-button"></i>
                        </button>
                        </div>
                    </div>`
        } else {
        resultHTML+= `<div class = "task">
                        <div class = "task-content">${taskList[i].inputTextValue}</div>
                        <div>
                        <button onclick = "toggleComplete('${taskList[i].id}')">
                            <i class="fa-solid fa-check" id = "check-button"></i>
                        </button>
                        <button onclick = "deleteTask('${taskList[i].id}')">
                            <i class="fa-regular fa-trash-can" id = "delete-button"></i>
                        </button>
                        </div>
                    </div>`
        }
    }
    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id){
    for (let i=0; i<taskList.length;i++){
        if (taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList);
}

function deleteTask(id){
    for (let i=0; i<taskList.length;i++){
        if (taskList[i].id == id){
            taskList.splice(taskList[i],1);
            break;
        }
    }
    render();
    console.log(taskList);
}

function randomIdGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}
