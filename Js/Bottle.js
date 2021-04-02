class Bottle
{
    constructor(x,y,width,height) 
    {
      var options = 
      {

          retitution: 0.1,
          density: 1,
          friction: 2,
      }
 
      this.body = Bodies.rectangle(x,y,20,70,options);
      this.width = 27;
      this.height = 70;
      this.image = loadImage("Images/bottle.png");
     
      World.add(world, this.body);

    }

    
    display()
    {
      var pos =this.body.position;

      imageMode(CENTER);

      fill("red");
      
      //push();

      //rotate(this.body.angle);
      //translate(pos.x,pos.y);
       
      image(this.image,pos.x,pos.y, this.width, this.height);

      //pop();
    }
    
}