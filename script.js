const slides = document.querySelectorAll(".slide-item");
let current = 0;
function showSlide(index){
  slides.forEach((slide)=>{
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}setInterval(()=>{
  current++;
  if(current >= slides.length){
    current = 0;
  }
  showSlide(current);
}
,4000);

/*모바일 메뉴*/ 
const menuBtn = document.querySelector(".menu-btn");
const gnb = document.querySelector(".gnb");
menuBtn.addEventListener("click", ()=>{
  gnb.classList.toggle("active");
});
 /* 모바일 서브메뉴 */ 
const menuItems = document.querySelectorAll(".gnb > ul > li");
menuItems.forEach((item)=>{
  item.addEventListener("click", ()=>{
    if(window.innerWidth <= 768){
      item.classList.toggle("open");
    }
  });
});