function addTask(){
     let taskInputField = document.getElementById("taskInput");

     if (taskInputField.value === "") {
          alert("please enter a new task");
          return
     }
     let listItems = document.getElementById("taskList");
     let li = document.createElement("li");
     li.textContent = taskInputField.value;
     
     listItems.appendChild(li);
     taskInputField.value = "";
}//
