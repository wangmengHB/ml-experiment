import React, { Component } from 'react';
import styles from './index.module.less';
import * as p5 from 'p5';
import { runBodypixDemo } from './bodypix-demo';
import { runFaceApiDemo } from './faceapi-demo';

console.log('p5', p5);










export default class Demo extends Component{

  componentDidMount() {
    // runBodypixDemo();
    runFaceApiDemo();
  }


  render() {

    return (
      <div className={styles.container}>
        <canvas id="canvas_demo_zone"/>
      </div>

    )

  }

}