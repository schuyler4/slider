 class Slider {
  constructor(width, height, color, parent, imgs, debug) {
    this.width = width,
    this.height = height
    this.color = color
    this.parent = parent
    this.imgs = imgs
    this.debug = debug
    this.index = 0
  }

  render() {
    if(this.debug) {
      console.log("debug true")
      console.log("rendering slider slider(" + this.width +"," +
        this.height + "," + this.color + ")")
    }

    const frame = document.createElement('div')
    this.parent.appendChild(mainFrame)
  }

  //renderButtons() {
    //buttons = [document.createElement]

  //}


}
