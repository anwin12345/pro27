class BOB 
{ constructor(x,y,r){


var options={
    isStatic:false,
    restitution:1.8,
    friction:0.10,
    density:1.5

    
    }

this.x=x;
this.y=y;
this.r=r
this.body=Bodies.circle(this.x, this.y, this.r/2, options)
World.add(world, this.body);

}
display()
{
    
    var paperp=this.body.position;		

    push()
    translate(paperp.x, paperp.y);
    rectMode(CENTER)
    strokeWeight(3);
    fill(255,0,255)
    ellipse(0,0,this.r, this.r);
    pop()
    
}
}