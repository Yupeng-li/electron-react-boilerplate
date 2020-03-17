import myModuleState from "./state";

export const updateTestData = newValue => {
  myModuleState.testData.set(newValue);
};
