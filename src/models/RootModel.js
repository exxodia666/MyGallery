//import {create} from 'mobx-persist';
import {AsyncStorage} from 'react-native';
import PicListModel from './PicListModel';

const pictures = [];
/*
const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});
*/
class RootModel {
  picturesStore = new PicListModel(pictures);
  /*
  constructor() {
    hydrate('list', this.listStore).then(() => {
      this.listStore.saveTasks(this.listStore.items);
    });
  }*/
}
export default new RootModel();