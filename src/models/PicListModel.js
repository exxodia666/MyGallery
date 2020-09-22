import Axios from 'axios';

//import { persist } from 'mobx-persist';
const {decorate, observable, action, computed} = require('mobx');

const status = {
  pending: 'pending',
  done: 'done',
  error: 'error',
};
/*
const url = `https://api.unsplash.com/photos/?client_id=${key}`;
const response = await fetch(url);
export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(url);
      const json = await response.json();
      setTimeout(() => {
        dispatch({type: 'FETCH_POSTS', payload: json});
        dispatch(hideLoader());
      }, 1000);
    } catch (e) {
      console.log('You lose');
      return null;
    }
  };
};
*/
//const key = 'iWj0huca0DBEMYJQ5Sx9TugUzLfIBNLzlO7yDKRVX9g';
//const url = `https://api.unsplash.com/photos/?client_id=${key}`;
const url =
  'https://api.unsplash.com/photos/?client_id=iWj0huca0DBEMYJQ5Sx9TugUzLfIBNLzlO7yDKRVX9g';

const fetchPictures = () => {
  Axios.get(url).then((res) => {
    console.log(JSON.stringify(res));
  });
};

class PicListModel {
  state = status.pending;
  savePictures = (items) => {
    fetchPictures();
  };
}

export default decorate(PicListModel, {
  pictures: [/*persist('list'),*/ observable],
  savePictures: action,
});
