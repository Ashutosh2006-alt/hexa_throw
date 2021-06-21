class Platform {
   constructor(x, y, w, h) {
      var pro = {
         isStatic: true
      }
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.body = Bodies.rectangle(x,y,w,h,pro);
      this.image = loadImage("images/wood.png");
      World.add(world,this.body);
   }
   display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill(0,0,0,0);
      stroke(0,0,0,0);
      rect(pos.x,pos.y,this.w,this.h);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.w,this.h);
   }
}