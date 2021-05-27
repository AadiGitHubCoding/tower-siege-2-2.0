class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.visiblity=255
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        if(this.body.speed > 3){
          push()
           tint(255,this.visiblity)
          // this.visiblity = this.visiblity - 5;
           World.remove(world, this.body);
           pop();
           
        }else{
      // push();
      console.log("nsie")
     var angle =this.body.angle
          var pos= this.body.position
          push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    
      //tint(255,this.visiblity)
          
          //tint(255,this.visiblity)
           
        } 
         
        
      }
}