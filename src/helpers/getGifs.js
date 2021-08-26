export const getGifs = async(category) => {
    // utilizamos encodeURI para que la categoria sea apta para el enlace
const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=4hGMfmTa4mKEzFk2A2ZtLEVVXg362LJt`

const resp = await fetch( URL );

const {data} = await resp.json();

const gifs = data.map(img => {
return{
id: img.id,
title: img.title,
url: img.images?.downsized_medium.url
}
} )


return gifs;

}