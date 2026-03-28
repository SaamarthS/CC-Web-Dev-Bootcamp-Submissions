function updateCount() {
    var count = document.querySelectorAll("#myList li").length;
    document.getElementById("taskCount").textContent = count + " task" + (count == 1 ? "" : "s");
}

function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();

    if (taskText == "") {
        alert("Please write something first!");
        return;
    }

    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        if (checkbox.checked) {
            li.classList.add("done");
        } else {
            li.classList.remove("done");
        }
    };

    var span = document.createElement("span");
    span.textContent = taskText;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.onclick = function() {
        li.remove();
        updateCount();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("myList").appendChild(li);

    input.value = "";
    input.focus();
    updateCount();
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
