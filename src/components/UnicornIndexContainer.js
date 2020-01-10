import React, { useEffect, useState } from "react"
import UnicornTile from "./UnicornTile"

const UnicornIndexContainer = (props) => {

  const unicornList = props.unicornInfo.map((unicornObj) => {
    return (
      <UnicornTile
        key={unicornObj.id}
        unicornName={unicornObj.unicornName}
        description={unicornObj.description}
      />
    )
  })


  return(
    <div>
      <ul>
        {unicornList}
      </ul>
    </div>
  )
}

export default UnicornIndexContainer
