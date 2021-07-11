export const eventMenu = () => {
	const btn = document.querySelector('#btnMenu');
	const list = document.querySelector('.nav_list');
	let view = false 

	btn.addEventListener('click', () => {

		if (!view) {
			list.style.left = "0"
			return view = !view
		}else {
			list.style.left = "-100vw"
			return view = !view
		}
	});
}