class Stand{
    constructor(x,y){
        var options = {
            isStatic :true,
            'friction' : 100,
        }
        this.body = Bodies.rectangle(x,y,200,10, options);
        World.add(world, this.body);

       
    }

    display(w){
        var pos = this.body.position ;
        rectMode(CENTER);
        rect(pos.x, pos.y, w,10);

           }
}