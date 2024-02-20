import { createSlice } from '@reduxjs/toolkit';
import Data from '../data/city.json';
const initialState = {
    value : Data,
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.value = [...state.value, action.payload]
      Data = [...Data, action.payload]
      state.value = Data;
    },
    removePost: (state, action) => {
      const postId = action.payload;
      state.value = state.value.filter(post => post.id !== postId);
      Data = [...Data,state.value]
    },
    filterPost: (state, action) => {
      const { departCity, destination } = action.payload;
      const LowerdepartCity = departCity.toLowerCase();
      const Lowerdestination = destination.toLowerCase();
      if (LowerdepartCity === '' && Lowerdestination === '') {
        console.log('no filter')
        state.value = Data;
      }else if (LowerdepartCity === '' && Lowerdestination !== '') {
        console.log("Destination", Lowerdestination)
        state.value = state.value.filter(post => post.destination.toLowerCase() === Lowerdestination);
      }else if (LowerdepartCity !== '' && Lowerdestination === '') {
        console.log("Depart", LowerdepartCity)
        state.value = state.value.filter(post => post.departCity.toLowerCase() === LowerdepartCity);
      }else{
        console.log("Depart", LowerdepartCity, "Destination", Lowerdestination)
        state.value = state.value.filter(post => post.departCity.toLowerCase() === LowerdepartCity && post.destination.toLowerCase() === Lowerdestination);
      }
    },
    getPlace: (state, action) => {
      const postId = action.payload;
      state.value = state.value.map(post => {
        if (post.id === postId) {
          if (post.placeNumber > 0) {
            post.placeNumber = post.placeNumber - 1;
          }else{
            alert('No place available')
          }
        }
        return post;
      });
    },
  },
});

export const {
  addPost,
  removePost,
  filterPost,
  getPlace
} = postSlice.actions;

export default postSlice.reducer;

