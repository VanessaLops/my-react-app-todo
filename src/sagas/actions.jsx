// actions.js
import * as types from "./actionTypes";

export const createTaskRequest = (taskData) => ({
  type: types.CREATE_TASK_REQUEST,
  payload: taskData,
});

export const createTaskSuccess = (task) => ({
  type: types.CREATE_TASK_SUCCESS,
  payload: task,
});

export const createTaskFailure = (error) => ({
  type: types.CREATE_TASK_FAILURE,
  payload: error,
});
export const fetchTasksRequest = () => ({
  type: types.FETCH_TASKS_REQUEST,
});
export const fetchTasksSuccess = (tasks) => ({
  type: types.FETCH_TASKS_SUCCESS,
  payload: tasks,
});

export const fetchTasksFailure = (error) => ({
  type: types.FETCH_TASKS_FAILURE,
  payload: error,
});


export const editTaskRequest = (taskData) => ({
  type: types.EDIT_TASK_REQUEST,
  payload: taskData,
});

export const editTaskSuccess = (task) => ({
  type: types.EDIT_TASK_SUCCESS,
  payload: task,
});

export const editTaskFailure = (error) => ({
  type: types.EDIT_TASK_FAILURE,
  payload: error,
});

export const deleteTaskRequest = (taskId) => ({
  type: types.DELETE_TASK_REQUEST,
  payload: taskId,
});

export const deleteTaskSuccess = (taskId) => ({
  type: types.DELETE_TASK_SUCCESS,
  payload: taskId,
});

export const deleteTaskFailure = (error) => ({
  type: types.DELETE_TASK_FAILURE,
  payload: error,
});