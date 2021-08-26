import React,{ useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GiffExpertApp = () => {

     const [categories, setCategories] = useState(['Taco'])

 
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategoriesInInput = {setCategories} />
            <hr/>
            
            <ol>
            {
                categories.map( category =>( 
                    // le damos un key al elemento para saber cual es (solicitado por react) en este caso el nombre mismo de la linea
                    <GifGrid
                        key = {category}
                        category = {category} 
                    />)
                   
                )
            }
            </ol>
        </>
    )


}
