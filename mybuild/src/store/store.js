import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterReducer'; // Создайте этот файл в папке reducers

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;