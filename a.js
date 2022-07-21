var capture;
var radius = 20;
var imgCache 
  let overAllTexture
function setup() {
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth,windowHeight);
  imgCache = createGraphics(windowWidth,windowHeight)
  imgCache.translate(windowWidth,0)
  imgCache.scale(-1,1)
  rectMode(CENTER)
  capture.hide()
  
  
  overAllTexture=createGraphics(width,height)
  overAllTexture.loadPixels()
  // noStroke()
  for(var i=0;i<width+50;i++){
    for(var o=0;o<height+50;o++){
      overAllTexture.set(i,o,color(100,noise(i/3,o/3,i*o/50)*random([0,50,100])))
    }
  }
  overAllTexture.updatePixels()
  
}
let mode = 1
function draw() {
  // loadImage(capture)
  background(0);
  imgCache.image(capture,0,0,windowWidth,windowHeight)
    noStroke()
    scale(1)
    radius = max(mouseX,0)/10+20
    for(var y=0;y<imgCache.height;y+=radius){
      for(var x=0;x<imgCache.width;x+=radius){
        var pixel = imgCache.get(x,y)
        var r = pixel[0]
        var g = pixel[1]
        var b = pixel[2]

        let bk = (r+g+b)/3
        let bkI = 10-int(bk/25.5)
          let txt = "PROCESSING课程"
          fill(r+50,g+50,b+50)
          textSize(radius)
          textStyle(BOLD)
          text(txt[bkI],x,y)
        
        }
      
      }  
    }
  

  
