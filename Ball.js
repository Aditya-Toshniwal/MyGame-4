class Ball{
    constructor(x,y,r){
     var  option={
         isStatic:true,
         restitution:1,
         density:0.5
     }
        this.x=x;
		this.y=y;
		this.r=r;
		this.body= Bodies.circle(x,y,r,option);
 		World.add(world, this.body);
		this.image= loadImage("images/Ball3.png")
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}