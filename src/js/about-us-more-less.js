(() => {
	const menuBtnRef = document.querySelector("[data-about-us__button]");
	const mobileMenuRef = document.querySelector("[about-us-more-less]");

	menuBtnRef.addEventListener("click", () => {
		const expanded =
			menuBtnRef.getAttribute("aria-expanded") === "true" || false;

		menuBtnRef.classList.toggle("is-open");
		menuBtnRef.setAttribute("aria-expanded", !expanded);

		mobileMenuRef.classList.toggle("is-open");
	});
})();