 class Rope{
     constructor(bodyA, pointB ){
var options = {
    bodyA : bodyA,
    pointB : pointB,
    stiffness : 0.04,
    length : 10
}

    this.body = Constraint.create(options);
    World.add(world, this.body);

     }

     fly(){
        // Matter.Body.applyForce(this.body.bodyA, {x: 120, y: 200})

         this.body.bodyA = null;
     }

     display(){

        
                     
         if(this.body.bodyA){
            strokeWeight(4);
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;  
             line(pointA.x, pointA.y, 100,180);
             //console.log(pointA.x, pointA.y)
         }
     }

 }