// sagas.js
import { put, call, takeLatest, all } from "redux-saga/effects";

import * as actions from "./actions";
import * as types from "./actionTypes";

const apiCreateTask = async (taskData) => {
  return new Promise((resolve, reject) => {
    try {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(taskData);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      resolve(taskData);
    } catch (error) {
      console.error("Erro ao criar a tarefa no Local Storage:", error);
      reject(error);
    }
  });
};

function* createTask(action) {
  console.log("Dados da tarefa recebidos no saga:", action.payload);
  try {
    const task = yield call(apiCreateTask, action.payload);

    yield put(actions.createTaskSuccess(task));
  } catch (error) {
    yield put(actions.createTaskFailure(error));
  }
}

function* fetchTasks() {
  try {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("Dados obtidos do localStorage:", tasks);
    yield put(actions.fetchTasksSuccess(tasks));
  } catch (error) {
    yield put(actions.fetchTasksFailure(error));
  }
}

// eslint-disable-next-line require-yield
function* apiEditTask(action) {
  // eslint-disable-next-line no-useless-catch
  try {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const editedTaskIndex = tasks.findIndex(
      (task) => task.id === action.payload.id
    );

    if (editedTaskIndex !== -1) {
      tasks[editedTaskIndex] = action.payload;

      localStorage.setItem("tasks", JSON.stringify(tasks));

      return action.payload;
    } else {
      throw new Error("Tarefa não encontrada");
    }
  } catch (error) {
    throw error;
  }
}

function* editTask(action) {
  console.log("Dados da tarefa recebidos no saga:", action.payload);
  try {
    const editedTask = yield call(apiEditTask, action);

    yield put(actions.editTaskSuccess(editedTask));
  } catch (error) {
    yield put(actions.editTaskFailure(error.message));
  }
}
// eslint-disable-next-line require-yield
function* apiDeleteTask(action) {
  // eslint-disable-next-line no-useless-catch
  try {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const updatedTasks = tasks.filter((task) => task.id !== action.payload);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    return action.payload; 
  } catch (error) {
    throw error;
  }
}

function* deleteTask(action) {
  try {
    console.log("Tarefa a ser excluída ID:", action.payload);
    const deletedTaskId = yield call(apiDeleteTask, action.payload); // Call the apiDeleteTask function with action.payload

    yield put(actions.deleteTaskSuccess(deletedTaskId)); // Pass the deleted taskId to the success action
  } catch (error) {
    yield put(actions.deleteTaskFailure(error.message));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.CREATE_TASK_REQUEST, createTask),
    takeLatest(types.FETCH_TASKS_REQUEST, fetchTasks),
    takeLatest(types.EDIT_TASK_REQUEST, editTask),
    takeLatest(types.DELETE_TASK_REQUEST, deleteTask),
  ]);
}
