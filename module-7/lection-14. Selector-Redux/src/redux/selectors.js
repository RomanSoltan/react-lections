import { createSelector } from "@reduxjs/toolkit";

// todos
export const selectTodos = (state) => state.todos.items;

// filter
// просто шукаємо елемент
export const selectFilter = (state) => state.filter.filter;
// пошук по статусу all, active, completed
export const selectStatus = (state) => state.filter.status;

// visibleTasks неоптимізований

// export const selectVisibilityTasksByStatus = (state) => {
//   console.log("filter status logic");

//   const todos = selectTodos(state);
//   const taskStatus = selectStatus(state);

//   switch (taskStatus) {
//     case "all":
//       return todos;
//     case "active":
//       return todos.filter((item) => !item.completed);
//     case "completed":
//       return todos.filter((item) => item.completed);
//     default:
//       return [];
//   }
// };

// visibleTasks оптимізований
export const selectVisibilityTasksByStatus = createSelector(
  [selectStatus, selectTodos],
  (taskStatus, todos) => {
    console.log("filter status logic memo");

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
  }
);

// UncompletedTodos неоптимізований

// export const selectUncompletedTodos = (state) => {
//   console.log("uncompleted logic");

//   const todos = selectTodos(state);

//   return todos.reduce((total, curr) => (curr.completed ? total : total + 1), 0);
// };

// UncompletedTodos оптимізований
export const selectUncompletedTodos = createSelector([selectTodos], (todos) => {
  console.log("uncompleted logic memo");

  return todos.reduce((total, curr) => (curr.completed ? total : total + 1), 0);
});
