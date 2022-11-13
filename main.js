function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    v=createCapture(VIDEO);
    v.hide()
}
function draw(){
    image(v,120,40,400,400);

    stroke(0,255,0);
    fill(255,0,0);
    rect(110,15,420,30);
    
    stroke(0,255,0);
    fill(255,0,0);
    rect(110,435,420,30);

    stroke(0,255,0);
    fill(255,0,0);
    rect(75,48,30,382);

    stroke(0,255,0);
    fill(255,0,0);
    rect(530,48,30,382);

    fill(213,63,119);
    stroke(255,192,203);
    circle(550,30,80);

    fill(213,63,119);
    stroke(255,192,203);
    circle(90,30,80);

    fill(213,63,119);
    stroke(255,192,203);
    circle(550,450,80);

    fill(213,63,119);
    stroke(255,192,203);
    circle(90,450,80);
}
function take_snapshot(){
    save("Img.png");
}