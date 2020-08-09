import { EDIT_TASK, CREATE_TASK, REMOVE_TASK } from "../actions/types";

const initialState = [
  //   {
  //     id: 1,
  //     title: "Learn ReactJS",
  //     description: "let's learn ReactJS",
  //     status: "Completed",
  //   },
  //   {
  //     id: 2,
  //     title: "Learn Redux",
  //     description: "let's learn Redux",
  //     status: "In Progress",
  //   },
  //   {
  //     id: 3,
  //     title: "Learn Vue",
  //     description: "let's learn Redux",
  //     status: "Unstarted",
  //   },
];

const tasks = (state = { tasks: initialState }, action) => {
  /****************************************************************
   *                      if else version
   ****************************************************************/
  //   if (action.type === EDIT_TASK) {
  //     const { payload } = action;
  //     return {
  //       tasks: state.tasks.map((task) => {
  //         if (task.id === payload.id) {
  //           return Object.assign({}, task, payload.params);
  //         }
  //         return task;
  //       }),
  //     };
  //   }
  /****************************************************************
   *                    switch version
   ****************************************************************/
  const { payload } = action;
  switch (action.type) {
    case EDIT_TASK: {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        }),
      };
    }
    case CREATE_TASK: {
      return {
        tasks: state.tasks.concat(action.payload),
      };
    }
    case REMOVE_TASK: {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    }
    default:
      return state;
  }
};

export default tasks;
