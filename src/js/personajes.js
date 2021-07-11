import { getData } from './service'
let count = 10

const crearHtml = async (num) =>{

	const container = document.querySelector('#container');

	const data = await getData(num)

	data.forEach((elem) => {

		container.innerHTML += `
		<div class="card">
			<img class="card_img" src="${elem.image}" alt="personaje_img">

			<p class="card_name"><i class="icon lar la-address-card"></i> ${elem.name}</p>
			<span class="card_text">${
				(elem.status === "Alive")
				? '<i class="icon lar la-heart"></i>'
				: (elem.status === "Dead")
				? '<i class="icon las la-skull-crossbones"></i>'
				: '<i class="icon las la-exclamation-triangle"></i>'
			} Estado: ${elem.status}</span>
			<span class="card_text"><i class="icon las la-leaf"></i> Especie: ${elem.species}</span>
			<span class="card_text"><i class="icon las la-cloud-sun"></i> Origen: ${elem.origin.name}</span>
			<span class="card_text"><i class="icon las la-globe"></i> Ultima ubicación: ${elem.location.name}</span>
		</div>
		`

	})

}

const eventos = () => {
	const btnAdd = document.querySelector('#container');
	const mensaje = document.querySelector('.mensaje');
	
	btnAdd.addEventListener('click', async function(e) {
		const elem = e.target.classList.contains("btnAdd")

		if (elem) {
			let x = count + 10
			
			await crearHtml(x)

			mensaje.style.left = "0"

			setTimeout(function() {
				mensaje.style.left = "-100vw"
			}, 4000);
		
			return count = x
		}
	});
}



export const init = () => {
	crearHtml(count)
	eventos()
}