// (() => {
// 	const menuBtnRef = document.querySelector("[data-program__button]");
// 	const mobileMenuRef = document.querySelector("[moreLess]");

// 	menuBtnRef.addEventListener("click", () => {
// 		const expanded =
// 			menuBtnRef.getAttribute("aria-expanded") === "true" || false;

// 		menuBtnRef.classList.toggle("is-open");
// 		menuBtnRef.setAttribute("aria-expanded", !expanded);

// 		mobileMenuRef.classList.toggle("is-open");
// 	});
// })();


$('.program__button').click(function () {
	$('.program__text--below').slideToggle();
	if ($('.program__button').text() == "Less") {
		$(this).text("Read more")
	} else {
		$(this).text("Less")
	}
});