//curious to see if you actually look at these notes or not.
//signature
let signatureSize = 12;
let sizeDirection = 1;
let sizeSteps = 0;
//xaxis
let x = 200;
let x1 = 200;
let facespeed = 2;
let earspeed = 4;
//yaxis
let y = 200;
let y1 = 200;
let y2 = 100;
let ballspeed = 2;
let ballspeed2 = 2;
let glassespeed = 4;

function setup() {
    createCanvas(400, 400);
  
}
function draw() {
    background(150);

    
// Draw the mouse coordinates    
fill(0);
noStroke();
textSize(12);
text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);



// end of mouse coordinates
    
//hair back (pain)
fill(91, 62, 25)
ellipse(200, 200, 325, 350);
triangle(41, 238, 53, 303, 66, 256)
triangle(360, 220, 350, 290, 345, 266)
triangle(332, 290, 323, 340, 305, 303)
triangle(308, 318, 303, 363, 265, 328)
triangle(290, 341, 276, 376, 255, 351)
triangle(61, 281, 71, 341, 83, 306)
triangle(79, 303, 101, 368, 125, 238)
triangle(80, 238, 118, 373, 146, 338)
triangle(195, 26, 111, 30, 180, 35)
triangle(96, 62, 49, 102, 78, 88)
triangle(200, 25, 245, 21, 225, 35)
triangle(300, 63, 355, 88, 296, 76)
triangle(353, 153, 368, 220, 360, 208)
//ears
x1 += earspeed;

if (x1 > 275 || x1 < 125) {
    earspeed *= -1;
}
fill(206, 204, 192);
circle(x1 - 100, 230, 100);
circle(x1 + 100, 230, 100);
//face shape
x += facespeed;

if (x > 387 || x < 13) {
    facespeed *= -1;
}
ellipse(x, 200, 260, 325);
//neck
    rect(130, 320, 140, 80);
//iconic earring
fill(127, 126, 127)
    rect(320, 280, 10, 70);
    rect(305, 305, 45, 10);
//"mouth"
stroke(2)
strokeWeight(2)
fill(190, 190, 180)
line(180, 315, 220, 315);
//eyes
stroke(0)
strokeWeight(0)
fill(190, 190, 180)
ellipse(140, 245, 70, 50);
ellipse(270, 245, 70, 50);
//balls
y += ballspeed;
if (y > 387 || y < 13) {
    ballspeed *= -1;
}
y2 += ballspeed2;
if (y2 > 387 || y2 < 13) {
    ballspeed2 *= -1;
}
fill(1000, 1000, 1000)
ellipse(140, 255, 65, 26);
ellipse(270, 255, 65, 26);
fill('black')
circle(x, y, 25);
circle(x, y2, 25);
// hair bangs (more pain)
fill(91, 62, 25)
ellipse(200, 110, 260, 170);
triangle(70, 120, 85, 220, 100, 120)
triangle(300, 120, 315, 220, 330, 120)
triangle(100, 140, 115, 240, 150, 140)
triangle(250, 140, 265, 240, 300, 140)
triangle(300, 140, 160, 245, 200, 190)
triangle(160, 175, 175, 260, 220, 160)
triangle(131, 156, 148, 225, 170, 136)
triangle(100, 138, 86, 195, 130, 150)
triangle(200, 185, 230, 240, 220, 155)
triangle(270, 175, 240, 258, 231, 178)
triangle(286, 152, 286, 205, 326, 143)
//glasses

y1 += glassespeed;
if (y1 > 387 || y1 < 13) {
    glassespeed *= -1;
}
stroke(224, 223, 201)
strokeWeight(4);
fill(0, 0, 0, 0)
circle(140, y1, 120);
circle(270, y1, 120);
//bluecolor 4 glasses
stroke(90, 112, 252)
strokeWeight(1);
fill(0, 0, 0, 0)
circle(140, y1, 122);
circle(270, y1, 122);
//nose
stroke(0)
strokeWeight(0);
fill(190, 190, 180)
triangle(205, 215, 180, 280, 230, 280);
triangle(180, 280, 205, 290, 230, 280);
//piercings
fill(127, 126, 127)
circle(215, 270, 10)
//eyebrow piercings
circle(105, 200, 10)
circle(107, 175, 10)
//
circle(75, 265, 10)
circle(325, 265, 10)
//lip piercings
stroke(127, 126, 127)
strokeWeight(4)
line(185, 323, 185, 313)
line(193, 323, 193, 313)
//signature obviously
fill(0)
stroke(0)
strokeWeight(0)
signatureSize += sizeDirection;
sizeSteps++;

if (sizeSteps === 20) {
    sizeDirection *= -1;
    sizeSteps = 0;
}

textSize(signatureSize);
text("Linus Anderson", 10, 390)
}