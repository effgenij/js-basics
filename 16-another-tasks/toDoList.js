const ToDoList = {
    tasks: [],

    lastID: 1,

addTask(title, priority, description = undefined) {
    const newTask = {
        id: this.lastID,
        title: title,
        priority: priority
    };

    if (description) {
        newTask.description = description;
    }

    this.tasks.push(newTask);
    this.lastID += 1;

    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },

    updateTask(id, title, priority, description = undefined) {
      const task = this.tasks.find(task => task.id === id);``
      if (task) {
        task.title = title;
        task.priority = priority;
        if (description) {
          task.description = description;
        }
      } else {
        console.log('Task not found');
      }
    },

    sortTasks(sortBy, order = 'asc') {
      if (sortBy !== 'id' || sortBy !== 'priority') {  
        console.log('Invalid sortBy value');  
        return;  
      }  
      this.tasks.sort((a, b) => (order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]));  
    },
  };

const newToDoList = {
  tasks: [],
  lastID: 1,
}

newToDoList.addTask = ToDoList.addTask.bind(newToDoList);
newToDoList.deleteTask = ToDoList.deleteTask.bind(newToDoList);
newToDoList.updateTask = ToDoList.updateTask.bind(newToDoList);
newToDoList.sortTasks = ToDoList.sortTasks.bind(newToDoList);

newToDoList.addTask('Task 11', 'High', 'New description');
newToDoList.addTask('Task 22', 'Low', 'New description');
console.log(newToDoList.tasks);
newToDoList.updateTask( 1, 'Task 11 updated', 'Low', 'New description');
console.log(newToDoList.tasks);