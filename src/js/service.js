const url = "https://rickandmortyapi.com/api/character"

export const getData = async (num) => {
	let x = num
	const resp = await fetch(`${url}/${num-9},${num-8},${num-7},${num-6},${num-5},${num-4},${num-3},${num-2},${num-1},${num}`)

	return await resp.json()

}