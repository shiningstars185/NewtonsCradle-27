class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyB,
            pointB: pointB,
            stiffness: 0.04,
            length: 200
        }
        this.pointB=pointB
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        if(this.chain,body.A){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,point.y,pointB.x,pointB.y);
        }
    }
}