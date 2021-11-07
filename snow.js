class Snow {
    constructor(x, y,w,h) {
        var options = {
            restitution: 5,
            friction: 0.1,
            density : 0.8,
            isStatic : false,
        

        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, this.w,this.h, options);
        this.image = loadImage("snow.png");
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h)
        pop();
    }

};


/*if(frameCount%60===0){

    particles.push(new Particle(random(width/2-10, width/2+10),10,10))
    console.log(frameCount)


  }

  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
    
  }

}*/