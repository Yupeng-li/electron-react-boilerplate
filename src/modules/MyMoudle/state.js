import { createState } from "redux-simple-state";

const INITIAL_STATE = {
  testData: "This is test data."
};

const myModuleState = createState("myModuleState", INITIAL_STATE);

export default myModuleState;
