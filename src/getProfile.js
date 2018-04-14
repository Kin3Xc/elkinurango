import Http from './http';
import Render from './render';

export default class GetProfile {

    constructor(url_base, token) {
        this.url = url_base;
        this.token = token;
    }

    // get profile
    getProfile() {
        Http.get(this.url,this.token)
            .then(res => {
                let render = new Render();
                render.render(res);
            }).catch(err => console.log(err) );
    }
}