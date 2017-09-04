function Snake(info) {
  this.x = info.x;
  this.y = info.y;
  this.w = info.w;
  this.h = info.h;
  this.xIndex = 1;
  this.yIndex = 0;
  this.initIndex();
  this.flag = true;
}

Snake.prototype = {
  constructor: Snake,
  draw: function () {
    this.x += this.xIndex * 20;
    this.y += this.yIndex * 20;
    if (this.x < 0 || this.x > canvas.width - this.w || this.y < 0 || this.y > canvas.height - 20) {
      flag = true;
      return;
    }
    for (var i = 1; i < snakeArr.length; i++) {
      if (this.x == snakeArr[i].x && this.y == snakeArr[i].y) {
        flag = true;
        return;
      }
    }
    context.save();
    context.fillStyle = '#115566';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.restore();
    context.fillStyle = 'hotpink';
    context.fillRect(this.x, this.y, this.w, this.h);
    this.flag = true;
  },
  initIndex: function () {
    var that = this;
    window.addEventListener('keydown', function (e) {
      switch (e.keyCode) {
        case 37:
          if (that.xIndex == 0 && that.flag == true) {
            that.xIndex = -1;
            that.yIndex = 0;
            that.flag = false;
          }
          break;
        case 38:
          if (that.yIndex == 0 && that.flag == true) {
            that.yIndex = -1;
            that.xIndex = 0;
            that.flag = false;
          }
          break;
        case 39:
          if (that.xIndex == 0 && that.flag == true) {
            that.xIndex = 1;
            that.yIndex = 0;
            that.flag = false;
          }
          break;
        case 40:
          if (that.yIndex == 0 && that.flag == true) {
            that.yIndex = 1;
            that.xIndex = 0;
            that.flag = false;
          }
          break;
      }

    })
  }

}