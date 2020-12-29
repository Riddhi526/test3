class Bob {
    constructor (x,y,r) {
       
    var options={
       isStatic:true,
       
       friction:0.5,
       density:1.2
    } 
    

    this.y=y;
    this.x=x;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,options);
    World.add(world,this.body);
    
    }
    display(){
        var bobPos=this.body.position;
      
        push()
        translate(bobPos.x,bobPos.y);
       ellipseMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop()

    }
}