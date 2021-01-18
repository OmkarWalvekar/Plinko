class Plinko {
    constructor(x,y,radius) {
     var opts_body = {
        isStatic:true
       
     }  
     
     this.body = Bodies.circle(x,y,radius,opts_body);
     this.r = radius;
    World.add(world, this.body);

    }

    display() {

      fill("white");

        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r);

        for (var i = 30; i < 480; i=i+30) {
            plinko = new Plinko(100,100,25);
        }
        
    }
}

