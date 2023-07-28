
let secondSection = document.getElementById('uuuu');
let circle_btn = document.getElementsByClassName('art-img Genshin-art')[0]
let c = 0
function increase_img(){
	let Circle = document.getElementsByClassName('circle')[0]
	if (c == 0){
		Circle.style.transform = 'scale(1.2)'
		c = 1
	}
	else {
		Circle.style.transform = 'scale(1)'
		c = 0
	}
	
}

circle_btn.addEventListener('click', increase_img);


let BtnMenu = document.getElementById('btn-menu');
linesBtnMenu = BtnMenu.getElementsByTagName('span');
let MobileMenu = document.getElementById('mobile-menu');
BtnMenu.addEventListener('click', function (e){
	MobileMenu.classList.toggle('is_active_mobile-menu');
	BtnMenu.classList.toggle('btnMenuAnimTranslateX');
	linesBtnMenu[0].classList.toggle('btnMenuAnimLine1');
	linesBtnMenu[1].classList.toggle('opacity-0');
	linesBtnMenu[2].classList.toggle('btnMenuAnimLine2');
});

let theme = 0;
let sunJpg = document.querySelector('.sun-jpg');
let moonJpg = document.querySelector('.moon-jpg');
let IconSystem = document.querySelector('.icon-system')
let main = document.getElementsByTagName("main")[0]
let header = document.getElementsByTagName("header")[0]
let body = document.getElementsByTagName("body")[0]
let footer = document.getElementsByTagName("footer")[0]
let logo = document.querySelector('.logo');
let logotip1 = document.querySelector('.logotip1');
let logotip2 = document.querySelector('.logotip2');
let logotip3 = document.querySelector('.logotip3');
let fourthScreen = document.getElementById('fourth-screen');
let accordion = document.querySelector(".accordion-section")
let shopSection = document.querySelector(".shop-section")
let aWiki = document.querySelector(".first-section-text > a")

let btn_theme_toggle = document.querySelector('.btn_theme_toggle')
btn_theme_toggle.addEventListener("click", (e) => {
	if (theme == 0){

		sunJpg.style.opacity = "1";
		moonJpg.style.opacity = "0";
		IconSystem.classList.add('slider_toggled');
		setLightTheme();
		theme = 1
	}
	else {
		sunJpg.style.opacity = "0";
		moonJpg.style.opacity = "1";
		IconSystem.classList.remove('slider_toggled');
		setDarkTheme();
		theme = 0
	}
})

function setLightTheme(){
 	main.classList.add("text-black");
 	header.classList.add("background-dark");
 	body.classList.add("text-light")
 	footer.classList.add("background-dark");
 	logo.classList.add("element-light");
 	logotip1.classList.add("element-light");
 	logotip2.classList.add("element-light");
 	logotip3.classList.add("element-light");
 	BtnMenu.classList.add("element-light");
 	main.classList.add("background-white");
 	secondSection.classList.add("background-light");
 	fourthScreen.classList.add("background-light");
 	accordion.classList.add("background-light");
 	shopSection.classList.add("background-light");
 	aWiki.classList.add("a-black");
}
function setDarkTheme(){
	 main.classList.remove("text-black");
	 header.classList.remove("background-dark");
	 body.classList.remove("text-light")
	 footer.classList.remove("background-dark");
	 logo.classList.remove("element-light");
	 logotip1.classList.remove("element-light");
	 logotip2.classList.remove("element-light");
	 logotip3.classList.remove("element-light");
	 BtnMenu.classList.remove("element-light");
	 main.classList.remove("background-white");
	 secondSection.classList.remove("background-light");
	 fourthScreen.classList.remove("background-light");
	 accordion.classList.remove("background-light");
	 shopSection.classList.remove("background-light");
	 aWiki.classList.remove("a-black");
}
let modalScreen = document.querySelector(".modal-screen");
let modalScreenImg = modalScreen.querySelector("img");
let galleryImages = document.querySelectorAll('.gallery > img');
for(let i = 0; i < galleryImages.length; i++){
	galleryImages[i].addEventListener("click", function(){
		modalScreenImg.src = this.src;
		modalScreen.classList.add('modal-screen-active');
		setTimeout(function(){
			modalScreen.style.opacity = "1";
		}, 0)
		
	});
}
modalScreen.addEventListener("click", function(){
		modalScreen.style.opacity = "0";
		setTimeout(function(){
			modalScreen.classList.remove('modal-screen-active');
		}, 400)
});
new ItcAccordion('#accordion', {
  alwaysOpen: false
});
let time = document.querySelector(".time")
function currentTime()	{
	const now = new Date();
	const year = now.getFullYear();
	const month = now.getUTCMonth()+1;
	const day = now.getDate()
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	const timeStr =  day+"-"+month+"-"+year+" "+hours+":"+minutes+":"+seconds;
	time.innerHTML = timeStr
}
setInterval(currentTime,1000)
let cartGlobalPriceValue = 0;
let carGlobalPrice = document.querySelector('.cart-global-price');
let btnsAddCart = document.querySelectorAll(".product > button")
// let btnsAddCart = document.querySelectorAll(".btn-basket  > button")
// let btnBasket = document.querySelector('btn-basket')
console.log(btnsAddCart)

for(let i = 0; i < btnsAddCart.length; i++) {
	btnsAddCart[i].addEventListener("click", () => {
		const product = btnsAddCart[i].parentNode;
		const price = product.querySelector(".product-price").innerHTML; 
		cartGlobalPriceValue += parseInt(price);
		carGlobalPrice.innerHTML = cartGlobalPriceValue;
	})
}
