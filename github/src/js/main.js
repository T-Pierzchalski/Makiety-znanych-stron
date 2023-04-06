const profileDivider = document.querySelector(".profile-divider");
const divider = document.querySelector(".divider");
const extendMenu = document.querySelector(".extend-menu");
const nav = document.querySelector(".extended");
profileDivider.addEventListener("click", () => {
	const ul = document.querySelector(".profile-divide");
	ul.style.cssText = "display:block";
	ul.addEventListener("mouseleave", () => {
		ul.style.cssText = "display:none";
	});
});
divider.addEventListener("click", () => {
	const ul = document.querySelector(".divider2");
	const profile = document.querySelector(".photo");
	ul.style.display = "block";
	profile.style.cssText = "z-index:-2";
	ul.addEventListener("mouseleave", () => {
		ul.style.cssText = "display:none";

		profile.style.cssText = "z-index:0";
	});
});
extendMenu.addEventListener("click", () => {
	nav.style.display = "flex";
	nav.addEventListener("mouseleave", () => {
		nav.style.display = "none";
	});
});
