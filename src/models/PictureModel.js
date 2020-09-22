import { decorate, observable } from 'mobx';

class PictureModel {
    /*
    description = '';
    url = '';
    id = 0;
    author = '';
*/
    constructor({ id, description, url, author }) {
        this.id = id;
        this.description = description;
        this.url = url;
        this.author = author;
    }
}
export default decorate(PictureModel, {
    id: [observable],
    description: [observable],
    url: [observable],
    author: [observable],
});