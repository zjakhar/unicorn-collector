import React, { useState } from 'react'


const NewUnicornForm = (props) => {
  const[formInput, setFormInput] = useState({
    unicornName: "",
    description: ""
  })

  const handleInputChange = (event) => {
    setFormInput({
      ...formInput,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleFormSubmit = event => {

    event.preventDefault()
    props.onFaqSubmitted(formInput)
    setFormInput({
      unicornName: "",
      description: ""
    })
  }

  return(
   <div>
     <form onSubmit={handleFormSubmit}>

       <label>
         Name:
         <input
           name="unicornName"
           type="text"
           onChange={handleInputChange}
           value={formInput.unicornName}
         />
       </label>

       <label>
         Description:
         <input
           name="description"
           type="text"
           onChange={handleInputChange}
           value={formInput.description}
         />
       </label>

       <input type="submit" value="Submit" className="button" />

     </form>
   </div>
  )
}

export default NewUnicornForm
