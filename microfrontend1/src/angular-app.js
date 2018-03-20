import './angular.css';
import * as angular from 'angular';
import { AppModule, html } from './app.module';

console.log('Angular connected');

const name = `${AppModule}.instance`;
const element = document.getElementById('angular-app');

element.innerHTML = html;

// create new module as we attaching `run` callback
angular.module(name, [AppModule])
    .value('config', {title: 'Angular Separate Running App'})
    .run(() => {
        console.log(`Angular module ${AppModule} instance is running`);
    });

angular.bootstrap(document, [name], {
    strictDi: true
});