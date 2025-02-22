// counter

// todos
export const selectTodos = (state) => state.todos.items;

// filter
// просто шукаємо елемент
export const selectFilter = (state) => state.filter.filter;
// пошук по статусу all, active, completed
export const selectStatus = (state) => state.filter.status;

// visibleTasks
export const selectVisibilityTasksByStatus = (state) => {
  console.log("filter status logic");

  const todos = selectTodos(state);
  const taskStatus = selectStatus(state);

  switch (taskStatus) {
    case "all":
      return todos;
    case "active":
      return todos.filter((item) => !item.completed);
    case "completed":
      return todos.filter((item) => item.completed);

    default:
      return [];
  }
};

export const selectUncompletedTodos = (state) => {
  console.log("uncompleted logic");

  const todos = selectTodos(state);

  return todos.reduce((total, curr) => (curr.completed ? total : total + 1), 0);
};
