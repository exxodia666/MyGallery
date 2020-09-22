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

  savePictures = () => {
    fetchPictures().then(
      (res) => {
        this.pictures = res.data.map((pic) => pic);
        this.state = status.done;
      },
      (error) => (this.state = status.error),
    );
  };
}

export default decorate(PicListModel, {
  pictures: [/*persist('list'),*/ observable],
  savePictures: action,
});
