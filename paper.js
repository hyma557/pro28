class Paper {
    constructor(x, y, radius) {
      var options= {
          isStatic: false, 
          restitution:0.3,
          friction:5.5,
          density:1.2
      }

      
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius = 1;
      this.image = loadImage("paper.png");
      World.add(world, this.body); 

    }
    display(){

      fill("white");
      var posit = this.body.position;

      push();
      translate(posit.x, posit.y);
      imageMode(CENTER);
      image(this.image, 0, 0, 33, 33)
      pop();

    }
}

