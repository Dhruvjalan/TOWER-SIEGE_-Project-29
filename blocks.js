var r1, g1, b1;
class Block{
    constructor(x,y,r,g,b){
        var options = {
            density: 0.1,
           // isStatic: true
        }

        this.body = Bodies.rectangle(x,y,20,30,options);
        World.add(world, this.body);
        
        r1 = r;
        g1 = g;
        b1 = b;

    }

    display(r,g,b){
        var pos = this.body.position ;
        rectMode(CENTER);
        fill(r,g,b);
        rect(pos.x, pos.y,20,30);



    }
}