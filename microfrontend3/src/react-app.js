import './react-app.css';
import React from 'react'
import { render } from 'react-dom';
import { App } from './App';

console.log('React 0.14 connected');

render(<App title={'React 0.14 Separate Running App'}/>, document.getElementById('react-app-old'));
