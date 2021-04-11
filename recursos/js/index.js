document.querySelector(".hero__menu-button").addEventListener("click", (click) => {
	click.explicitOriginalTarget.children[0].classList.toggle("menu-button__bars--open")
});
