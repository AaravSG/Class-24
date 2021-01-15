class Bird{

    constructor(x,y,width,height){
        var options = {

            restitution : 0.5,
            friction :1,
            density :1
            
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
        this.height = height;
        this.width = width;
    }
   



    display(){

        
        var pos= this.body.position;
        pos.x= mouseX;
        pos.y= mouseY;
        var angle = this.body.angle;

        push ();
        translate(pos.x,pos.y)
        rotate(angle)
        fill("red");
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop ();

    }

}