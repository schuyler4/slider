 class Slider {
  constructor(parent, imgs) {
    this.parent = parent
    this.imgs = imgs
    this.frame = document.createElement('div')
    this.index = 0
    this.img = document.createElement('img')
  }

  render() {
    this.parent.appendChild(this.frame)
    this.frame.id = "slideFrame"

    this.buttons()
    this.slides()
  }

  slides() {
    this.img.src = this.imgs[this.index].src
    this.img.width = this.imgs[this.index].width
    this.img.height = this.imgs[this.index].height
    this.img.id = "slideImg"
    this.frame.appendChild(this.img)
  }

  addIndex(direction) {
    if(direction == "forward") {
      this.index < this.imgs.length - 1 ? this.index++ : this.index = 0;
    }
    else if(direction == "backward") {
      this.index > 0 ? this.index -= 1: this.index = this.imgs.length - 1;
    }

    this.img.src = this.imgs[this.index].src
    this.img.width = this.imgs[this.index].width
    this.img.height = this.imgs[this.index].height
  }

  buttons() {
    const buttons = [
      document.createElement('button'),
      document.createElement('button')
    ]

    const addIndex = this.addIndex
    const boundAddIndex = addIndex.bind(this)

    for(var i in buttons) {
      this.frame.appendChild(buttons[i])
    }

    buttons[0].addEventListener("click", function() {
      boundAddIndex("backward")
    })
    buttons[0].id = "leftButton"

    buttons[1].addEventListener("click", function() {
      boundAddIndex("forward")
    })
    buttons[1].id = "rightButton"

  }

}
