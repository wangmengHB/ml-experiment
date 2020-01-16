export function createCanvas(w, h){
  const canvas = document.getElementById('canvas_demo_zone') as HTMLCanvasElement; 
  canvas.width  = w;
  canvas.height = h;
  // document.body.appendChild(canvas);
  return canvas;
}

export const IMG_SRC_1 = '../../../assets/main1.jpg';