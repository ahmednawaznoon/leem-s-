class Tree {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.width = width
        this.height = height
        this.image = loadImage("tree.png")
    }
    display() {
        push()
        imageMode(CENTER)
        image(this.image,900,310,550,600)
        pop()
    }

}