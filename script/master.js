var en = 1;

if (matchMedia) {
  var mq = window.matchMedia("(min-width: 1300px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    document.getElementById('navbar').style.transform = "translate(0px,0px)";
    en = 1;
  } else {
    document.getElementById('navbar').style.transform = "translate(400px,0px)";
  }

}

function toggle(){
  if(en % 2 == 0){
    document.getElementById('navbar').style.transform = "translate(400px,0px)";
  }
  else{
    document.getElementById('navbar').style.transform = "translate(0px,0px)";
  }
  en++;
}
/*
function toggle(){
  if(en % 2 == 0){
    document.getElementById('navbar').style.transform = "translate(0px,-500px)";
    document.getElementById('navbar').style.opacity = "0";
    setTimeout(function(){
      document.getElementById('navbar').style.display = "none";
    },200);
    //document.getElementById('navbar').style.transform = "translate(0px,-500px)";
  }
  else{
    document.getElementById('navbar').style.display = "block";

   setTimeout(function(){
      document.getElementById('navbar').style.opacity = "1";

      //document.getElementById('navbar').style.transform = "translate(0px,0px)";
    },200);
    //document.getElementById('navbar').style.transform = "translate(0px,0px)";
  }
  en++;
}*/
