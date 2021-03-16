class Player
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			restitution:0.2,
			density:1	
			}
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.body= Bodies.rectangle(x,y,w,h,options);
 		World.add(world, this.body);
		this.image= loadImage("images/image1.png")
	
	}
	display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }}