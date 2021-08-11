class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }


  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var num=10;
    var num1=10+10;
    console.log(num1);
    var arr;
    arr=[10,"nithya","e","w"];
    console.log(arr);
    console.log(arr[1]);
    var arr2=[["ni",1,2],["um",6,7],["ka",5,8]];
    console.log(arr2[1][0]);


    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
   }
   

    for(var i=0; i<this.trajectory.length; i++){
      console.log(this.trajectory[i][0]);
      console.log(this.trajectory[i][1]);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
}
  }
}
