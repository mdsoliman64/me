document.addEventListener("scroll",handleScrolling);
function handleScrolling(){

console.log(document.documentElement.scrollTop);

}

// ================ SKills Mouse Over Effect ==================

const skill = document.getElementById("skills");
skill.addEventListener("mousemove",parralox);

function parralox(e){
document.querySelectorAll(".skills-card").forEach((move)=>{

    var movingValue = move.getAttribute("data-value");
    var x = (e.clientX*movingValue)/200;
    var y = (e.clientY * movingValue)/200;
    move.style.transform="translateX(" + x +"px) translateY("+ y +"px)";
});
document.querySelectorAll(".backend-card").forEach((move)=>{

    var movingValue = move.getAttribute("data-value");
    var x = (e.clientX*movingValue)/200;
    var y = (e.clientY * movingValue)/200;
    move.style.transform="translateX(" + x +"px) translateY("+ y +"px)";
});
};
// ================ end ==========================
const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.5
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
    console.log(observer.observe);
  } 
  /////////////// Random Text Generator ////////////////
  document.getElementById("title").addEventListener("mouseover",textgen);
  document.getElementById("title").addEventListener("touchstart",textgen);
  var headingText = document.querySelector("#title").innerHTML;

  

  function textgen(){
    $(document).ready(function(){
        var theLetters = "abcdef%&^ghopqrstuvwxyz#+=-"; //You can customize what letters it will cycle through
        var ctnt = headingText; // Your text goes here
        var speed = 35; // ms per frame
        var increment = 8; // frames per step. Must be >2
        
            
        var clen = ctnt.length;       
        var si = 0;
        var stri = 0;
        var block = "";
        var fixed = "";
        //Call self x times, whole function wrapped in setTimeout
        (function rustle (i) {          
        setTimeout(function () {
          if (--i){rustle(i);}
          nextFrame(i);
          si = si + 1;        
        }, speed);
        })(clen*increment+1); 


        function nextFrame(pos){
          for (var i=0; i<clen-stri; i++) {
            //Random number
            var num = Math.floor(theLetters.length * Math.random());
            //Get random letter
            var letter = theLetters.charAt(num);
            block = block + letter;
          }
          if (si == (increment-1)){
            stri++;
          }
          if (si == increment){
          // Add a letter; 
          // every speed*10 ms
          fixed = fixed +  ctnt.charAt(stri - 1);
          si = 0;
          }
          $("#title").html(fixed + block);
          block = "";
        }
        });



  }
  /////////////////  Test ////////////////////////////////////////
  const fp= document.querySelectorAll("p")[0];
fp.addEventListener("mouseover",mernAnimation);
fp.addEventListener("mouseleave",mernAnimationLeave);

function mernAnimation(){
fp.style.letterSpacing="1.6rem";

}
function mernAnimationLeave(){
  fp.style.letterSpacing="1rem";
  
  }
  /////////////////////////////
  const year = new Date().getFullYear();
  document.getElementById("footer").innerHTML=year;
