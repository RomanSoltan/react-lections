import { createAction } from "@reduxjs/toolkit";

// export const reset = { type: "RESET" };
// export const increment = { type: "INCREMENT" };
// export const decrement = { type: "DECREMENT" };

// export const changeStep = (newStep) => {
//   return {
//     type: "changeStep",
//     payload: newStep,
//   };
// };

// те саме

// функці поверне обєкт на вихід
export const reset = createAction("reset");
export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const changeStep = createAction("changeStep");

// console.log(changeStep()); // payload: undefined
// console.log(changeStep(10)); // payload: '10'
// console.log(changeStep({ name: "Pedro" })); // payload: {name: "Pedro"}
