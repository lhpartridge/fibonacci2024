// 2.1 Create a class GBox (for Golden Box)
class GBox {

// 2.2 Create a constructor that takes arguments for the x and y positions and the width
  constructor(_x, _y, _w) {

// 4.1 Create a vector for the position with the x and y coordinates
    this.pos = createVector(_x, _y); 

// 4.2 Assign the value of _w to the width
    this.wid = _w
 
// 7.2 Add the variable n and set it to 0.
    this.n = 0

    // 11.1 Add a variable for the direction to change the direction in which each new box is added.
    this.dir = 0
  }


  
// 5.1 Write the render method
  render() {

// 14.2 Move the rectMode(CENTER) from the setup function to the render function.
    rectMode(CENTER)

// 15.0 Add a fill color
    fill(255, 61)

// 19.2 To render the rectangle, add another pair of stroke and strokeWeight after the fill.Set the stroke color to white.  
    strokeWeight(1);
    stroke(255);

// 5.2 use the translate method to set the position of the x and y coordinates of the vector to the center of the drawing.
    translate(this.pos.x, this.pos.y)

// 16.0 Draw the curves.
// Add a rotate method under the translate method in the render function. 
// The method will take the 90 degrees and convert it to radians then multiplying it by the iteration count.    
    rotate(radians(90) * this.n)  
  
// 5.3 Create a rectangle with no change to the starting position and giving the width to the width and height to create a square box.
    rect(0, 0, this.wid, this.wid)

// 19.1 To render the curve, add a stroke and strokeWeight.
    strokeWeight(3)
    stroke(255, 255, 0)

// 17.1 Add the beginShape method set to POINTS to begin drawing the curve.
    beginShape(POINTS);

// 18.1 Inside the begin and endShapes, begin drawing the curve.
//      Write a for-loop between the begin and endShape methods to create a vertex for each point with its x and y coordinates.  
//      Begin the iteration count with 180 and increment until the count reaches 270.   
//      This will use the bottom right corner as the center of the circle.
      // for (let i = 180; i < 270; i++) {

// 20.0 To smooth the curve, change the increment in the for-loop to i+=.33.
      // for (let i = 180; i < 270; i+=0.33) {

// 21.1 To simplify the vertex method, you can eliminate the variables and write the coordinates for the vertices directly in the vertex method.
//      Change the iteration in the for loop to run from 90 to 180.  
//      Delete the lines for the x and y coordinates and the vertex.  
//      Rewrite the vertex method using 
    for (let i = 90; i < 180; i+=0.33) {  

// 18.2 The origin of the curve will be the bottom left hand corner of the square.  
//      We will be creating 90 points.  
//      So the x coordinate will be the sum of half the width added to the product of the current width and the cosine of the increment.  
//      This uses polar coordinates to draw the arc with the radius based on the width of the box. 
        // let vX = (this.wid/2) + this.wid * Math.cos(radians((i)))

// 18.3 Write a similar statement for the y coordinate that uses the product of the radius and the sine of the increment to obtain the position on the curve.   
//      This will draw the curve from the bottom left to the top right of the box.
        // let vY = (this.wid/2) + this.wid * Math.sin(radians(i))

        // vertex(vX, vY);
// 21.2 Rewrite the vertex method using the x- and y-coordinates 
//      x:  the sum of half the width plus the product of the width and the cosine of the width 
//      y:  half the width less the product of the width and the sine of the width
        vertex((this.wid/2)+this.wid * Math.cos(radians(i)), (this.wid/2)-this.wid * Math.sin(radians(i)));
      }

// 17.2 Add the endShape method set to POINTS to end drawing the curve.
    endShape(POINTS);    
  }  

// 7.1 Create a new box that is shifted up and to the right and decrease its diameter by the golden mean.
//     Create an iterate method with the variable n which will keep count of the interations.  
  iterate() {
    this.n++

// 11.2 Change the direction by incrementing for each iteration
    this.dir++
    // 11.3 Write a conditional to reset the direction to 1 once the iteration loop is complete.
    if (this.dir > 4) this.dir = 1

// 12.1 Write a series of conditionals to set the position of the new box based on the direction of the previous box.
//      The first condition incorporates the previous position.  
//      The first iteration moves the box to the right.
if (this.dir === 1) {

  // 9.1 Set the new x and y positions to shift the new box to the right and down.
//     Increment the x position by the sum of half the current width and half the new width multiplied by the golden mean.  
//     Decrement the y position by half the new width less half the current width times the golden mean to shift down.
    this.pos.x += (this.wid/2) + ((this.wid/2) * golden)  
    this.pos.y -= (this.wid/2) - ((this.wid/2) * golden)

// 12.2 The second iteration moves the box down.
} else if (this.dir === 2) {
  this.pos.x += (this.wid/2) - ((this.wid/2) * golden)
  this.pos.y += (this.wid/2) + ((this.wid/2) * golden)

// 12.3 The third iteration moves the box to the left.
} else if (this.dir === 3) {
  this.pos.x -= (this.wid/2) + ((this.wid/2) * golden)
  this.pos.y += (this.wid/2) - ((this.wid/2) * golden)

// 12.4 The fourth iteration moves the new box up.
} else if (this.dir === 4) {
  this.pos.x -= (this.wid/2) - ((this.wid/2) * golden)
  this.pos.y -= (this.wid/2) + ((this.wid/2) * golden)
  }

// 9.2 Multiply the width times the golden mean to decrease and reset the size of the next box in the series.
    this.wid *= golden; 
  }


}

// 3.1 Declare the variable fib (for fibonacci)
let fib

// 8.0 Add a global variable for the golden mean after fibly.  Use at least three decimal places.
const golden = 0.618003398875;

function setup() {
  // 1.1 Set up the canvas and background
  createCanvas(windowWidth, windowHeight)
  background(0, 0, 100)

  // 14.1 Move the rectMode(CENTER) from the setup function to the render function above the translate method.
  //      Cut the line of code and copyit to the render function
  // 1.2 Set the rectMode to center to reset the drawing from the default top left corner
  // rectMode(CENTER)

  // 3.2 Create a new GBox and assign it to the variable fibly with the parameters for half the width and height of the canvas and 100 for the width of the rectangle.
  fib = new GBox(width / 2, height / 2, 100)

  // 13.0 Change the third parameter to half the height times the golden ratio. This should place the rendering near the center of the screen.
  fib = new GBox(width / 2, height / 2, height / 2 * golden)


  // 6.0  Renderfibly in the setup function below the instantiation of fibly. 
  //      This should render a white rectangle on a blue background.  
  //      Check your console if you do not see it in your browser.
  fib.render()

  // 22.1 Add instructions for the user. 
  //      Set the text size and weight.  Set the position on the text to above the rectangle relative to its center.
  textSize(20);
  strokeWeight(1);
  text("Click or tap to iterate :)", -70, -150);

}

// 10.0 To render the  new box with a mouse press, add a function after the setup function.  
//      Use the function to call the iterate and render methods.
//      When the mouse is clicked, a new box will be rendered to the right of the current box. 
//      Check your console if you do not see a series of new boxes when you click the mouse


const draw =()=> {
  // put drawing code here
}

// Converted to ES6 
function mousePressed() {
  fib.iterate();
  fib.render();
}