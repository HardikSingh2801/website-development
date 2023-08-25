console.log('chaliye shuru krte hau')

  //factory function
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log('draw');
//     }
// };   

//constructor function

// function Rectangle(len, bre){
//     this.length=len;
//     this.breadth=bre;

//     this.draw= function(){
//         console.log('Drawing');
//     }
// }

// //object creation

// let rectangleobj = new Rectangle(3,5);
// rectangleobj.color= 'yellow';
// console.log(rectangleobj);

// delete rectangleobj.color
// console.log(rectangleobj);


// let src={

//     a:10,
//     b:20,
//     c:30,    
// };

// let dest = {};

// for(let key in src){
//     dest[key]= src[key];
// }

// console.log(src);

let src={
    a:10,
    b:20,
    c:30,
};

let dest = Object.assign({}, src);
console.log(dest);