import { ReduxManager } from "redux-simple-state";
import MyModule from "./MyMoudle";

export default function registerStates() {
  /* Register your state here */
  ReduxManager.registerState(MyModule.state);
}
