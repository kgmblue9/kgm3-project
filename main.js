// 유저는 할 일을 추가할 수 있다.
// 각 할 일에 삭제와 체크 버튼이 있다.
// 삭제 버튼을 누르면 할 일이 리스트에서 사라진다.
// 체크 버튼을 누르면 할 일이 끝난 것으로 간주하고 삭제선이 그어진다.
// 끝나 할 일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
// 탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
// 모바일 버전에서도 볼 수 있는 반응형 웹이다.

let inputTodo = document.getElementById("input-text");
let addButton = document.getElementById("add-button");
let task = document.getElementsByClassName("task");
let taskList = document.getElementById("task-list");

// inputTodo.addEventListener("keypress")
addButton.addEventListener("click",addtask);

function addtask(){
    inputTodoValue = inputTodo.value;
    taskList.textContent = inputTodoValue;
    inputTodo.value = null ;
}
