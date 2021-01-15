class Log{

    constructor(x,y,height,angle){
        var options = {

            restitution : 0.5,
            friction :1,
            density :1

        }

        this.body = Bodies.rectangle(x,y,20,height,options);
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)



        this.height = height;
        this.width = 20;
    }
   

    display(){

        
        var pos = this.body.position;
        var angle= this.body.angle;

        push ();

        translate(pos.x,pos.y)
        rotate(angle);
        
        stroke("green");
        strokeWeight(4)
        fill ("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);

        pop ();

    }

}