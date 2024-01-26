class GBox {
  constructor(_x, _y, _w) {
    this.pos = createVector(_x, _y)
    this.wid = _w

    this.n = 0

    this.dir = 0
  }
  
  render() {
    rectMode(CENTER)

    fill(255, 61)

    strokeWeight(1)
    stroke(255)

    translate(this.pos.x, this.pos.y)
    rotate(radians(90) * this.n) 

    rect(0, 0, this.wid, this.wid)

    strokeWeight(3)
    stroke(255, 255, 0)

    beginShape(POINTS) 

    for (let i = 90; i < 180; i+= 0.33) {
      // let vX = (this.wid / 2) + this.wid * Math.cos(radians(i))
      // let vY = (this.wid / 2) + this.wid * Math.sin(radians(i))

      // vertex(vX, vY) 
      vertex((this.wid / 2) + this.wid * Math.cos(radians(i)), 
      (this.wid / 2) - this.wid * Math.sin(radians(i)))
    }

    endShape(POINTS)
  }

  iterate() {
    this.n++

    this.dir++

    if (this.dir > 4) this.dir = 1

    if (this.dir === 1) {
      this.pos.x += (this.wid / 2) + ((this.wid / 2) * golden)
      this.pos.y -= (this.wid / 2) - ((this.wid / 2) * golden)
    } else if (this.dir === 2) {
      this.pos.x += (this.wid / 2) - ((this.wid / 2) * golden)
      this.pos.y += (this.wid / 2) + ((this.wid / 2) * golden)
    } else if (this.dir === 3) {
      this.pos.x -= (this.wid / 2) + ((this.wid / 2) * golden)
      this.pos.y += (this.wid / 2) - ((this.wid / 2) * golden)
    } else if (this.dir === 4) {
      this.pos.x -= (this.wid / 2) - ((this.wid / 2) * golden)
      this.pos.y -= (this.wid / 2) + ((this.wid / 2) * golden)
    }

    
    this.wid *= golden
  }

}

let fib
const golden = 0.61800

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0, 0, 100)

  

  fib = new GBox(width / 2, height / 2, height / 2 * golden)

  fib.render()

  textSize(20)
  strokeWeight(1)
  text("Click or tap to iterate :)", -70, -150)
}

function draw() {
  
}

function mousePressed() {
  fib.iterate()
  fib.render()
}