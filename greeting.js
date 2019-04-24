// let name1 ="Olivier";
//  function sayHi(){
//      console.log('Hi' + name1);
//  }
 (function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);