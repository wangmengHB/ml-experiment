import * as ml5 from 'ml5';
import { createCanvas, IMG_SRC_1 } from './common';


let faceapi;
let img;
let detections;
let canvas, ctx;

// by default all options are set to true
const detection_options = {
    withLandmarks: true,
    withDescriptors: false,
}



export async function runFaceApiDemo(){
    img = new Image();
    img.src = IMG_SRC_1;

    img.onload = () => {
      canvas = createCanvas(img.width, img.height);
      ctx = canvas.getContext('2d');
      faceapi = ml5.faceApi(detection_options, modelReady);
    }

}


function modelReady() {
    console.log('ready!')
    faceapi.detectSingle(img, gotResults);
    (window as any).faceApi = faceapi;
}

function gotResults(err, result) {
    if (err) {
        console.log(err)
        return
    }
    console.log(result);
    detections = result;

    ctx.drawImage(img, 0,0, img.width, img.height);

    if (detections) {
        console.log(detections)
        drawBox(detections)
        drawLandmarks(detections)
    }
}

function drawBox(detections){
    const alignedRect = detections.alignedRect;
    const {_x, _y, _width, _height} = alignedRect._box;
    // canvas.fillStyle = 'none';
    ctx.rect(_x, _y, _width, _height);
    ctx.strokeStyle = "#a15ffb";
    ctx.stroke();
}

function drawLandmarks(detections){
    // mouth
    ctx.beginPath();
    detections.parts.mouth.forEach( (item, idx) => {
        if(idx = 0){
            ctx.moveTo(item._x, item._y);
        } else {
            ctx.lineTo(item._x, item._y);
        }
    })
    ctx.closePath();
    ctx.stroke();

    // nose
    ctx.beginPath();
    detections.parts.nose.forEach( (item, idx) => {
        if(idx = 0){
            ctx.moveTo(item._x, item._y);
        } else {
            ctx.lineTo(item._x, item._y);
        }
    })
    ctx.stroke();

    // // left eye
    ctx.beginPath();
    detections.parts.leftEye.forEach( (item, idx) => {
        if(idx = 0){
            ctx.moveTo(item._x, item._y);
        } else {
            ctx.lineTo(item._x, item._y);
        }
    })
    ctx.closePath();
    ctx.stroke();

    // // right eye
    ctx.beginPath();
    detections.parts.rightEye.forEach( (item, idx) => {
        if(idx = 0){
            ctx.moveTo(item._x, item._y);
        } else {
            ctx.lineTo(item._x, item._y);
        }
    })
    
    ctx.closePath();
    ctx.stroke();

    // // right eyebrow
    ctx.beginPath();
    detections.parts.rightEyeBrow.forEach( (item, idx) => {
        if(idx = 0){
            ctx.moveTo(item._x, item._y);
        } else {
            ctx.lineTo(item._x, item._y);
        }
    })
    ctx.stroke();
    // canvas.closePath();

    
    // // left eyeBrow
    ctx.beginPath();
    detections.parts.leftEyeBrow.forEach( (item, idx) => {
        if(idx = 0){
            ctx.moveTo(item._x, item._y);
        } else {
            ctx.lineTo(item._x, item._y);
        }
    })
    // canvas.closePath();

    ctx.strokeStyle = "#a15ffb";
    ctx.stroke();

}
