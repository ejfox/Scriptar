components = {
  size: {
    type: 'number',
    value: 20,
    units: "pixel",
    label: "Size"
  },
  number: {
    type: 'number',
    value: 100,
    label: "Number"
  }
};



var palette = new Palette("Test", components);

var number = 100;
var size = 10;
var row = 0;
var padding = size/5;

var components;




for (var i=0; i < number; i++) {
    
    var ournum = i;
    
    if(ournum > 9) {
        ournum = ournum.toString()[1];
    }
    
    if(i/10 == 1 || i/10 == 2 || i/10 == 3 || i/10 == 4 || i/10 == 5){
        row++
    }
    else if(i/10 == 6 || i/10 == 7 || i/10 == 8 || i/10 == 9 || i/10 == 10 ){
        row++
    }
    console.log(row, i)
    
    var myPath1 = new Path.Rectangle(new Point((ournum*(size+padding)),(row*(size+padding))), new Size(size,size));
    
};

