const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 0

class Sand {
    constructor(x, y, velocity) {
        this.x = x,
        this.y = y,
        this.color = 'orange',
        this.velocity = velocity,
        this.width = 20,
        this.height = 20
    }

    draw() {
        c.fillStyle = this.color
        c.fillRect(this.x, this.y, this.width, this.height)
    }

    update() {
        this.x += this.velocity.x
        this.y += this.velocity.y

        this.draw()

        if(this.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += gravity
        }
        else this.velocity.y = 0
    }
}

const grainOfSand = new Sand(canvas.width / 2, 0, { x: 0, y: 1 })
const sand = []

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    sand.forEach(grainOfSand => {
        grainOfSand.update()
    })
}
addEventListener('click', (event) => {
})
animate()