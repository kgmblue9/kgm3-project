// 유저는 할 일을 추가할 수 있다.
// 각 할 일에 삭제와 체크 버튼이 있다.
// 삭제 버튼을 누르면 할 일이 리스트에서 사라진다.
// 체크 버튼을 누르면 할 일이 끝난 것으로 간주하고 삭제선이 그어진다.
// 끝나 할 일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
// 탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
// 모바일 버전에서도 볼 수 있는 반응형 웹이다.

let inputText = document.getElementById("input-text");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click",addtask);

function addtask(){
    if (inputText.value == ""){
        return;
    } else {
    inputTextValue = inputText.value;
    taskList.push(inputTextValue);
    inputText.value = "" ;
    render();
    }
}

function render(){
    let resultHTML = '';
    for (let i=0; i<taskList.length; i++){
        resultHTML+= `<div class = "task">
                        <div>${taskList[i]}</div>
                        <div>
                        <button id = "check-button">
                            <i class="fa-solid fa-check"></i>
                        </button>
                        <button id = "delete-button">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                        </div>
                    </div>`
    }
    document.getElementById("task-board").innerHTML = resultHTML;
}
