const ToDoList = {
    tasks: [],
  
    lastID: 0,

    addTask(title, priority) {
      const id = this.lastID + 1;
      const task = { id, title, priority };
      this.tasks.push(task);
      this.lastID = id;
    },
  
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  
    updateTask(id, title, priority) {
      const task = this.tasks.find(task => task.id === id);``
      if (task) {
        task.title = title;
        task.priority = priority;
      }else {
        console.log('Task not found');
      }
    },

    sortTasks(sortBy, order = 'asc') {
      if (sortBy === 'id') {
        this.tasks.sort((a, b) => (order === 'asc' ? a.id - b.id : b.id - a.id));
      } else if (sortBy === 'priority') {
        this.tasks.sort((a, b) => (order === 'asc' ? a.priority - b.priority : b.priority - a.priority));
      }
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
