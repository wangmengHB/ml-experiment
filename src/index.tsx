// import 'babel-polyfill';
import 'antd/dist/antd.less';
import ReactDOM from 'react-dom';
import React from 'react';
import View from './view';


const root = document.createElement('div');
document.body.appendChild(root);




ReactDOM.render(
  <View />,
  root
)