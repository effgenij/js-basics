const ToDoList = {
    tasks: [],
  
    lastID: 0,

    addTask(title, priority) {
      this.tasks.push({ id, title, priority });  
      this.lastID = this.lastID + 1;  
    },
  
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  
    updateTask(id, title, priority) {
      const task = this.tasks.find(task => task.id === id);``
      if (task) {
        task.title = title;
        task.priority = priority;
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
  
  // Example usage
  const task1 = ToDoList.addTask('Task 1', 1);
  const task2 = ToDoList.addTask('Task 2', 2);
  console.log(ToDoList.tasks);
  
  ToDoList.deleteTask(1);
  console.log(ToDoList.tasks);
  
  ToDoList.updateTask(2, 'Updated Task 2', 3);
  console.log(ToDoList.tasks);

  const task3 = ToDoList.addTask('Task 3', 2);
  const task4 = ToDoList.addTask('Task 4', 2);
  
  ToDoList.sortTasks('priority', 'desc');
  console.log(ToDoList.tasks);
