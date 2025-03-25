import { configureStore } from '@reduxjs/toolkit'; // Removed getDefaultMiddleware
import userReducer from '../features/user/userSlice.js'; // Fixed typo: useReducer -> userReducer
import movieReducer from '../features/movie/movieSlice';

export default configureStore({
  reducer: {
    user: userReducer, // Fixed typo: useReducer -> userReducer
    movie : movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check if needed
    }),
});