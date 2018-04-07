import Http from './http';
import Render from './render';

export default class GetProfile {

    constructor(url_base) {
        this.url = url_base;
    }

    // get profile
    getProfile() {
        Http.get(this.url)
            .then(res => {
                let render = new Render();
                render.render(res);
            }).catch(err => console.log(err) );
    }
}