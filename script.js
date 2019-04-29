// // Object creation
// //  we use dorthe(.) and curry bracket([]) to assignm a value for his declaration 
// // let company=new Object();
// // company.Name="Facebook";
// // console.log(company);
// // company.ceo =new Object();
// // company.ceo.firstName ="Mark";
// // company.ceo.favColor ="red";

// // console.log(company);
// // console.log("company CEO name is :"+ company.ceo.firstName);

// // console.log(company ["Name"]);
// // let stockPropName ="stock of company";
// // company[stockPropName] =110;


// // console.log("stock price is :"+ company[stockPropName]);


// // Better way: object literal 

// // let Facebook={
// //    Name:"Facebook",
// //    CEO:{
// //     firstName:"Mark",
// //      favColor:"red"
// //     },
// // "stock of company": 110,
// //    };
// //    console.log(Facebook.CEO.firstName)

// /* FUNCTION ARE FIRST-CLASS Data Types*/

// // function multiply(x,y){
// //     return x*y;
// // }
// // console.log(multiply(5,3));
// // multiply.version="v.1.0.0";
// // console.log(multiply.version);

// /* FUNCTION FACTORY */

// // function markMultiplier(multiplier){
// //     let myFunc=function(x){
// //         return multiplier*x;
// //     };
// //       return myFunc;
// // }

// // let multiplyBy3 = markMultiplier(3);
// //  console.log(multiplyBy3(10));
// //  let doubleAll = markMultiplier(2);
// //  console.log(doubleAll(100));

//  /*  passing function as arguments */
// // function doOperationOn(x, operation){
// //     return operation(x);
// // }

// // let result =doOperationOn(5,multiplyBy3);
// // console.log(result);
// // result =doOperationOn(100, doubleAll);
// // console.log(result);

// /* Copy by Reference vs by value  */

// /* 1)Copy by value */

// // let a =7;
// // let  b=a;
// // console.log("a:"+a);
// // console.log("b:"+b);
// // b=5;
// // console.log("after b update:");
// // console.log("a:"+a);
// // console.log("b:"+b);

// /* 2)Copy by reference*/

// // let a={x:7};
// // let b=a;
// // console.log(a);
// // console.log(b);

// // b.x=5;
// // console.log("after b.x update:");
// // console.log(a);
// // console(b);

// /* Pass by reference vs by value */

// /* 3) pass by value */

// // function ChangePrimitive(primValue){
// //     console.log("in changePrimitive...");
// //     console.log("before:");
// //     console.log(primValue);

// //  primValue=5;
// // console.log("after:");
// // console.log(primValue);
// // }
// // let value=7;
// // ChangePrimitive(value);
// // console.log("after ChangePrimitive,orig value:");
// // console.log(value);

// /*4) pass by reference */
// // function changeObject(objValue){
// //     console.log("in changeObject...");
// //     console.log("before:");
// //     console.log(objValue);

// //     objValue.x =5;
// //     console.log("after:");
// //     console.log(objValue);
// // }

// // value ={x:7};
// // changeObject(value);
// // console.log("after changeObject,orig value:");
// // console.log(value);
// /* function test */
// // function test(){
// //     console.log(this);
// //     this.myName ="yaakov";
// // }
// // test();
// // console.log(window.myName);

// /*  Function constructors */

// // function Circle(radius){
// //     this.radius = radius;
    
// //     this.getArea =
// //     function (){
// //         return Math.PI *Math.pow(this.radius, 2)
// //     };
// // }
// // let myCircle = new Circle(10);
// // console.log(myCircle.getArea());

// /* Object literals and "this" */

// // let literalCircle={
// //     radius:10,
// //     getArea: function(){
// //         let self = this;
// //         console.log(this);

// //         let increaseRadius = function (){
// //             this.radius =20;
// //         };
// //         increaseRadius();
// //         console.log(this.radius); 
// //         return Math.PI*Math.pow(this.radius, 2);
// //     }
// // };
// // console.log(literalCircle.getArea());

// /*    array 
// let array = new Array();
//  array[0]="yaakov";
//  array[1]=2;
//  array[2]=function(name){
//      console.log("hello"+ name);
//  };
//  array[3] = {course:"HTML,CSS & js"};
//  console.log(array);
//  array[2] (array[0]);
//  console.log(array[3].course);
//  */

//  //short hand array creation 

// //  let names= ["yaakov", "john","joe"];
// // //  console.log(names)
// // for(let i=0; i<names.length;i++){
// //     console.log("hello"+names[i]);
// // }
// // names[50]="hugo";
// // for(let i=0; i<names.length;i++){
// //     console.log("hello"+names[i]);
// // }

// // let names2 = ["yaakov", "john","joe"];
// // // let myObj= {
// // //     name:"yaakov",
// // //     course:"HTML/CSS/js",
// // //     platform:"coursera"
// // // };
// // // for(let prop in myObj){
// // //     console.log(prop +":"+myObj[prop]);
// // // }
// // // for(let name in names2){
// // //     console.log("hello:"+ names2[name]);
// // // }

// // names2.greeting="hi";
// // for(let name in names2){
// //     console.log("hello:"+ names2[name]);
// // }
 
// /* closures */
// //  function markeMultiplier(multiplier){
// //     //  var multiplier =2;
// //     function b(){
// //         console.log("multiplier is:"+ multiplier);
// //     }
// //     b();


// //      return(
// //          function(x){
// //              return multiplier*x;
// //          }
// //      );
// //  }
  
// //  let doubleAll = markeMultiplier(2);
// //  console.log(doubleAll(10));

// /*  Immediately Invoked Function Expression LIFE*/

// // let name ="Hugo";
// //  function sayWelcome(){
// //      console.log('welcome' + name);
// //  }
//  (function(window) {
//     var byeSpeaker = new Object();
//     var speakWord = "Good Bye";
//     byeSpeaker.speak = function speak(name) {
//         console.log(speakWord + " " + name);
//     };
//     window.byeSpeaker = byeSpeaker;
// })(window);