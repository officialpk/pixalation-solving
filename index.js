var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

img=new Image();
img.onload=function(){

  /// step 1
  var oc = document.createElement('canvas'),
      octx = oc.getContext('2d');
  oc.width = img.width * 0.5;
  oc.height = img.height * 0.5;
  octx.drawImage(img, 0,0, oc.width,oc.height);

  /// step 2
  octx.drawImage(oc,0,0,oc.width * 0.5,oc.height * 0.5);

  canvas.width=100;
  canvas.height=130;
  ctx.drawImage(oc,0,0,oc.width * 0.5, oc.height * 0.5,
                0,0,canvas.width,canvas.height);
}
img.src="./pexels-pixabay-60597.jpg";
