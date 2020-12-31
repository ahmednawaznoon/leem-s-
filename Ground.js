class Ground {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.groundObject = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.groundObject)
        this.width = width
        this.height = height
    }
    display() {
        push()
        rectMode(CENTER)
        fill("#66ca06")
        stroke("#66ca06")
        rect(this.groundObject.position.x,this.groundObject.position.y,this.width,this.height)
        pop()
    }
}