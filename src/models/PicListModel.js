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
    fetchPictures()
      .then(
        (res) => {
          //console.log(res);
          this.pictures = res.data.map((pic) => pic);
        },
        (e) => {
          throw new Error(e);
        },
      )
      .catch((e) => e);
  };
}

export default decorate(PicListModel, {
  pictures: [/*persist('list'),*/ observable],
  savePictures: action,
});
