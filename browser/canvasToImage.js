//canvas转换为图片
const canvas2Image = (canvas, width, height)  => {
  const retCanvas = document.createElement('canvas');
  const retCtx = retCanvas.getContext('2d');
  retCanvas.width = width;
  retCanvas.height = height;
  retCtx.drawImage(canvas, 0, 0, width, height, 0, 0, width, height);
  const img = document.createElement('img');
  img.src = retCanvas.toDataURL('image/jpeg');  // 可以根据需要更改格式
  return img;
}
