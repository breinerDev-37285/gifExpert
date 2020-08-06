
export default async (category:string) => {
    const url = new URL('https://api.giphy.com/v1/gifs/search')


    const params = {
        api_key : 'uY1IeNEAK1moL7wbeqxgD1MAO6GvW369',
        q : category,
        limit : '10'
    }

    url.search = new URLSearchParams(params).toString()

    const peticion = await fetch(url.toString(), { method: 'GET'})
    const { data } = await peticion.json();


    const info = data.map((elem:any) => {
        return { 
            id: elem.id,
            title: elem.title,
            image: elem.images.downsized_medium.url
        }
    })

    return info
}