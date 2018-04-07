// get api
export default class Http {

    static get(url) {
        // let loader = document.querySelector('.loader');
        // loader.style.display = 'block';
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.send();

        return new Promise((resolve, reject) => {
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    // loader.style.display = 'none';
                    if (xhr.status == 200) return resolve(JSON.parse(xhr.responseText));
                    return reject(xhr.status);
                }
            }
        });
    }

}