import { createStore } from "redux";
import rootReducer from "./redux/reducer/main";

export const store= createStore(rootReducer);
