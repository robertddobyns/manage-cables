import React from 'react'

const Entry = (props) => {


  return (
      <div>
        {props.cableStart} -> {props.cableEnd}: {props.cableCount}
      </div>
  )
}

export default Entry