import './react-app.css';
import React from 'react'
import { render } from 'react-dom';
import { App } from './App';

console.log('React 15 connected');

render(<App title={'React 15 Separate Running App'}/>, document.getElementById('react-app'));
