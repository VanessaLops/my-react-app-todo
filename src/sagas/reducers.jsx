// reducers.js
import * as types from "./actionTypes";

const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case types.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
      };
    case types.EDIT_TASK_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    case types.DELETE_TASK_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const updatedTasksS = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        tasks: updatedTasksS,
      };
    default:
      return state;
  }
};

export default rootReducer;
