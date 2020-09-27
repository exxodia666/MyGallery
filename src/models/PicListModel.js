import Axios from 'axios';
//import { persist } from 'mobx-persist';
const {decorate, observable, action, computed} = require('mobx');
import {url, status} from '../utills/constants';

const fetchPictures = () => {
  return Axios.get(url);
};

class PicListModel {
  state = status.pending;
  pictures = [];

  error = {
    message: '',
    state: false,
  };

  savePictures = () => {
    console.log('fetch');
    this.error = {};
    this.pictures = [];
    fetchPictures().then(
      (res) => {
        console.log(res);
        this.pictures = res.data.map((pic) => pic);
      },
      (e) => {
        console.log(e);
        this.error.state = true;
        this.error.message = e.toString();
      },
    );
  };
}

export default decorate(PicListModel, {
  pictures: [/*persist('list'),*/ observable],
  error: [/*persist('list'),*/ observable],
  savePictures: action,
});
