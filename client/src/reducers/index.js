import { combineReducers } from "redux";
import {
  bookListReducer,
  bookDetailsReducer,
  bookCreateReducer,
  bookDeleteReducer,
} from "./bookReducers";

export default combineReducers({
  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
  bookCreate: bookCreateReducer,
  bookDelete: bookDeleteReducer,
});
