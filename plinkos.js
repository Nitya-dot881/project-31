class Plinkos
{
    constructor(x, y, radius)
    {
       var options={
        
          isStatic:true
       }
      
      
this.body = Bodies.circle(x, y, radius, options );
this.radius=radius
World.add(world, this.body);
}
display()
{
    var pos =this.body.position;
     stroke("yellow")
    strokeWeight("3")
    fill("pink")
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,10,10)
}
}
