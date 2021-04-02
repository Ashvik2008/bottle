class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          friction: 2

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Images/Table1.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x,pos.y, this.width, this.height);

    }
  };
