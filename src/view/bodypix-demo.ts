import * as ml5 from 'ml5';
import { createCanvas, IMG_SRC_1 } from './common';



export async function runBodypixDemo() {
    const img = new Image();
    img.src = IMG_SRC_1;
    
    const bodypix = await ml5.bodyPix()
    console.log('body pix', bodypix);
    (window as any).bodypix = bodypix;
    const segmentation = await bodypix.segment(img);

    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0,0);

    let maskedBackground = await imageDataToCanvas(segmentation.raw.backgroundMask.data, segmentation.raw.backgroundMask.width, segmentation.raw.backgroundMask.height)
    ctx.drawImage(maskedBackground, 0, 0);

}



// Convert a ImageData to a Canvas
 function imageDataToCanvas(imageData: Uint8ClampedArray, x, y) {
    // console.log(raws, x, y)
    const arr = Array.from(imageData);
    const canvas = document.createElement('canvas'); // Consider using offScreenCanvas when it is ready?
    const ctx = canvas.getContext('2d');

    canvas.width = x;
    canvas.height = y;

    const imgData: ImageData = ctx.createImageData(x, y) as ImageData;
    const { data } = imgData;

    for (let i = 0; i < x * y * 4; i += 1 ) {
      data[i] = arr[i];
    } 
    ctx.putImageData(imgData, 0, 0);

    return ctx.canvas;
};

