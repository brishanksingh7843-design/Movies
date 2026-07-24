const root = document.documentElement;
window.addEventListener("resize", (e) => {
  root.style.setProperty("--scale", "");
});
function whichTheme() {
  const theme1 = document.getElementById("vinlandTheme");
  let a = Math.round(Math.random() * 100);
  if (a % 2 == 0) {
    theme1.src = "saga-vid.mp4";
    console.log("1");
  } else {
    theme1.src = "vin2-vid.mp4";
    console.log("2");
  }
}
whichTheme();
function if1() {
  document.querySelector(".s1").style.textShadow = "0 0 15px white";
  document.querySelector(".s1").style.opacity = "1";
  document.querySelector(".s2").style.textShadow = "none";
  document.querySelector(".s2").style.opacity = "0.6";
  document.querySelector(".s1").style.borderBottom = "2px solid red";
  document.querySelector(".s2").style.border = "none";
  document.querySelectorAll(".epis").forEach((e) => {
    e.style.display = "block";
  });
  document.querySelectorAll(".epis2").forEach((e) => {
    e.style.display = "none";
  });
}
///////////////////////////////////////////////////////////////////////////////////////////////////
function of() {
  document.querySelector(".main-display").style.display = "none";
  document.querySelector(".vinland").style.display = "block";
  if1();
}
function ofd() {
  document.querySelector(".main-display").style.display = "none";
  document.querySelector(".deathnote").style.display = "block";
}
function ofg() {
  document.querySelector(".graveof").style.display = "block";
  document.querySelector(".main-display").style.display = "none";
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function contback() {
  document.querySelector(".main-display").style.display = "block";
  document.querySelector(".vinland").style.display = "none";
  document.querySelector(".graveof").style.display = "none";
  document.querySelector(".deathnote").style.display = "none";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let earlier = "";
function seasonsss() {
  document.querySelectorAll(".epis2").forEach((e) => {
    e.addEventListener("click", (e) => {
      const vidsrc = e.currentTarget.dataset.link;
      console.log(e);
      console.log(e.currentTarget.dataset);
      console.log(vidsrc);
      earlier = e.target.parentElement.parentElement.className;
      document.querySelector(".view-pg").style.display = "block";
      document.querySelector(".vinland").style.display = "none";
      document.getElementById("ifram").src = vidsrc;
      console.log("done");
    });
  });
  document.querySelectorAll(".epis").forEach((e) => {
    e.addEventListener("click", (e) => {
      const vidsrc = e.currentTarget.dataset.link;
      console.log(vidsrc);
      earlier = e.target.parentElement.parentElement.className;
      document.querySelector(".view-pg").style.display = "block";
      document.querySelector(".vinland").style.display = "none";
      document.querySelector(".deathnote").style.display = "none";
      document.querySelector(".graveof").style.display = "none";
      document.getElementById("ifram").src = vidsrc;
      console.log("done");
    });
  });
}
seasonsss();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const vseason = document.querySelector(".seasons");
vseason.addEventListener("click", (e) => {
  // console.log('clicked');
  // console.log(e.target);
  // console.log(e.target.classList.value);
  if (e.target.classList.value == "s1") {
    if1();
  } else if (e.target.classList.value == "s2") {
    document.querySelector(".s1").style.textShadow = "none";
    document.querySelector(".s1").style.opacity = "0.6";
    document.querySelector(".s2").style.textShadow = "0 0 15px white";
    document.querySelector(".s2").style.opacity = "1";
    document.querySelector(".s2").style.borderBottom = "2px solid red";
    document.querySelector(".s1").style.border = "none";
    document.querySelectorAll(".epis").forEach((e) => {
      e.style.display = "none";
    });
    document.querySelectorAll(".epis2").forEach((e) => {
      e.style.display = "block";
    });
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const b1 = document.querySelector(".b1");
b1.addEventListener("click", () => {
  if (earlier == "vinland") {
    document.querySelector(".vinland").style.display = "block";
  } else if (earlier == "deathnote") {
    document.querySelector(".deathnote").style.display = "block";
  } else if (earlier == "graveof") {
    document.querySelector(".graveof").style.display = "block";
  }
  document.querySelector(".view-pg").style.display = "none";
  document.getElementById("ifram").src = "";
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// b2.addEventListener("click", () => {
//   openFullScreen(document.getElementById("ifram"));
// });
// function openFullScreen(elem) {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.webkitRequestFullscreen) {
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) {
//     elem.msRequestFullscreen();
//   }
//   console.log("entered here");
// }
