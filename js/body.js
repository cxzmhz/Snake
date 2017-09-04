function Body(info) {
  this.x = info.x;
  this.y = info.y;
  this.w = info.w;
  this.h = info.h;
}

Body.prototype = {
  constructor: Body,
  draw: function () {
  	if(flag){
  		return;
  	}
    context.fillRect(this.x, this.y, this.w, this.h);
  }
}