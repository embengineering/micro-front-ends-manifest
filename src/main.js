import 'babel-polyfill';
import axios from 'axios';

const handleError = error => console.error(error);
const handleSucess = (directory, { data: manifest }) => {
    console.log('Manifest configuration loaded:', manifest);

    let style = document.createElement('link');
    let script = document.createElement('script');

    style.rel = 'stylesheet';
    style.href = directory + '/' + manifest.maincss;

    script.type = 'text/javascript';
    script.src = directory + '/' + manifest.mainjs;

    document.head.appendChild(style);
    document.body.appendChild(script);
};
const loadManifest = name => {
    axios.get(`${name}/manifest.json`)
    .then(handleSucess.bind(this, name))
    .catch(handleError);
};

loadManifest('microfrontend1');
loadManifest('microfrontend2');
loadManifest('microfrontend3');



