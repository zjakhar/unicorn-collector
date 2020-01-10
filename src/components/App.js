import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom" //hint-hint
import UnicornIndexContainer from "./UnicornIndexContainer"
import NewUnicornForm from "./NewUnicornForm"

const App = (props) => {
  const [unicornInfo, setUnicornInfo] = useState([])

  useEffect(() => {
    fetch("/api/v1/unicorns")
    .then (response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(unicornInfoData => {
      setUnicornInfo(unicornInfoData)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const onFaqSubmitted = (formInput) => {
    fetch("/api/v1/unicorns", {
      method: 'POST',
      body: JSON.stringify(formInput)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(newFaqWithId => {
      // debugger
      setUnicornInfo([
        ...unicornInfo,
        newFaqWithId)
    })
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }


  return(
   <div>
     <UnicornIndexContainer
       unicornInfo={unicornInfo}
     />
     <NewUnicornForm
      onFaqSubmitted={onFaqSubmitted}
     />
   </div>
  )
}

export default App
