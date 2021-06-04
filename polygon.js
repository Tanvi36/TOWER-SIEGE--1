class polygon
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1.0,
			density:1.0
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("polygon.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var polygonpos=this.body.position;		
			push()
			translate(polygonpos.x, polygonpos.y);
			fill("yellow")
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
			
	}

}