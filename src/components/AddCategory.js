import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategoriesInInput} ) => {


    const [inputValue, setinputValue] = useState('')

    const handleInputChange = ( e ) => {
        setinputValue(e.target.value);
    } 

    const handleSubmit = (e) => {

        e.preventDefault(); //para prevenir el reinicio de la pagina

        if( inputValue.trim().length > 2 ){
            setCategoriesInInput( cats => [ inputValue, ...cats] );
            setinputValue('');
        }

       
    }

    /*----- HTML----- */
    return (
  
         <form onSubmit = {handleSubmit}>
            <input 
                type="text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
         </form>
      
    )
    /*----- FIN HTML----- */
}

AddCategory.propTypes = {
    setCategoriesInInput: PropTypes.func.isRequired
}