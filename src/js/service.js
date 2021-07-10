const url = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10"

export const getData = async () => {

	const resp = await fetch(url)

	return await resp.json()

}