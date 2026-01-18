const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const statCount = document.getElementById('stat-count');
const progressBar = document.getElementById('progress-bar-fill');

let tasks = [];

addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        renderTasks();
    }
});

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-info">
                <div class="checkbox" onclick="toggleTask(${index})"></div>
                <span class="task-text">${task.text}</span>
            </div>
            <div class="icons">
                <button class="btn-icon" onclick="deleteTask(${index})">🗑️</button>
            </div>
        `;
        taskList.appendChild(li);
    });
    updateStats();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    
    statCount.innerText = `${completed}/${total}`;
    
    const percentage = total === 0 ? 0 : (completed / total) * 100;
    progressBar.style.width = percentage + "%";
}