function Food(info) {
  this.w = info.w;
  this.h = info.h;
  this.changeCoord();
}
Food.prototype = {
  constructor: Food,
  draw: function () {
    context.save();
    context.fillStyle = 'yellowgreen';
    context.fillRect(this.x, this.y, this.w, this.h);
    context.restore();

  },
  changeCoord: function () {
    this.x = Math.floor(Math.random() * 20) * 20;
    this.y = Math.floor(Math.random() * 20) * 20;
  }
}