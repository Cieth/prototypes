function Auto() {
    this.velocidad = 0
    this.acelerar = (arg) => {this.velocidad += arg}
    this.frenar = (arg) => { (this.velocidad - arg) < 0 ? this.velocidad = 0 : this.velocidad -= arg }
  }
