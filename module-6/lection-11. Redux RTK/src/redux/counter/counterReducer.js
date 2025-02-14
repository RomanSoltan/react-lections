import { changeStep, decrement, increment, reset } from "./actions";

const initialState = {
  counter: 0,
  step: 1,
};

// action - це ті події, які редюсер може зробити
// state - це те, з чим він може зробити

// BLL (business logic layer) бізнес логіка
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // потрібно навчити працівника, що робити
    case increment.type: {
      // повернення нового стану
      return {
        // розпиляємо попередній стейт
        // збільшимо counter на наш step
        ...state,
        counter: state.counter + state.step,
      };
    }
    case decrement.type: {
      return {
        // повертай все старе
        // зменшимо counter на наш step
        ...state,
        counter: state.counter - state.step,
      };
    }
    case reset.type: {
      return initialState;
    }
    case changeStep.type: {
      return {
        ...state,
        // змінюємо step на те що приходить з input
        step: action.payload,
      };
    }
    default:
      return state;
  }
};
