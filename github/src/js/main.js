const profileDivider = document.querySelector(".profile-divider");
const divider = document.querySelector(".divider");
profileDivider.addEventListener("click", () => {
	const ul = document.querySelector(".profile-divide");
	ul.style.cssText = "display:block";
	ul.addEventListener("mouseleave", () => {
		ul.style.cssText = "display:none";
	});
});
divider.addEventListener("click", () => {
	const ul = document.querySelector(".divider2");
	ul.style.display = "block";
	ul.addEventListener("mouseleave", () => {
		ul.style.cssText = "display:none";
	});
});
