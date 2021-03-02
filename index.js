class shape {
    constructor() {

    }
    area() {
        return ''
    }
}

class triangle extends shape {
    constructor(b, h) {
        super()
        this.b = b
        this.h = h
    }
    area() {
        return 1 / 2 * this.b * this.h
    }
}

class circle extends shape {
    constructor(r) {
        super()
        this.r = r
    }
    area() {
        return 3.14 * this.r * this.r
    }
}

class square extends shape {
    constructor(a) {
        super()
        this.a = a
    }
    area() {
        return this.a * this.a
    }
}


class rectangle extends shape {
    constructor(l, w) {
        super()
        this.w = w
        this.l = l
    }
    area() {
        return this.w * this.l
    }
}

var shapes = [new triangle(3, 6), new circle(5), new square(5), new rectangle(4, 8)]

function allShapes(n) {
    var totalArea = 0
    n.forEach(function (item) {
        console.log(item.area())
        totalArea = totalArea + item.area()
    })
    return totalArea
}

var d = allShapes(shapes)
console.log(d, 'total area')

var c = new square(6)
console.log(c.area(), 'square2')

var e = new triangle(5, 10)
console.log(e.area(), 'triangle2')










