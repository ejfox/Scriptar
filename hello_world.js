var myPath1 = new Path.Rectangle(new Point(100,0), new Size(100,100));
var myPath2 = new Path.Rectangle(new Point(100,110), new Size(100,100));
var myPath3 = new Path.Rectangle(new Point(100,210), new Size(100,100));


var myGroup = new Group();
myGroup.appendBottom(myPath1);
myGroup.appendBottom(myPath2);
myGroup.appendBottom(myPath3);

var layer = document.activeLayer;
layer.name = "@new_placeholder_thing";
layer.appendBottom(myGroup);

