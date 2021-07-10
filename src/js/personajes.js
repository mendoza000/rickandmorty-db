import { getData } from './service'

const crearHtml = async () =>{

	const container = document.querySelector('#container');

	const data = await getData()

	data.forEach((elem) => {

		container.innerHTML += `
		<div class="card">
			<img class="card_img" src="${elem.image}" alt="personaje_img">

			<p class="card_name"><i class="icon lar la-address-card"></i> ${elem.name}</p>
			<span class="card_text">${
				(elem.status === "Alive")
				? '<i class="icon lar la-heart"></i>'
				: '<i class="icon las la-skull-crossbones"></i>'
			} Estado: ${elem.status}</span>
			<span class="card_text"><i class="icon las la-leaf"></i> Especie: ${elem.species}</span>
			<span class="card_text"><i class="icon las la-cloud-sun"></i> Origen: ${elem.origin.name}</span>
			<span class="card_text"><i class="icon las la-globe"></i> Ultima ubicación: ${elem.location.name}</span>
		</div>
		`

	})

}



export const init = () => {
	crearHtml()
}