class Ball {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0,
          density:1
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r=r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      ellipseMode(RADIUS);
      fill("green");
      ellipse(0,0,this.r,this.r);
pop()
    }
  };