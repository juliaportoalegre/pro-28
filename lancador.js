class Lancador{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.004,
            length: 10
        }
        this.bodyA = body
        this.pointB = anchor
        this.lancador = Constraint.create(options);
        World.add(world, this.lancador);
    }
 attach(body){
     this.lancador.bodyA = body;
 }
    fly(){
        this.lancador.bodyA = null;
    }

    display(){
        if(this.lancador.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48, 22, 8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
