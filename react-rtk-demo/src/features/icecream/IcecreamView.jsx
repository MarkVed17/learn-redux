import React from "react"
import { useSelector } from "react-redux"

export const IcecreamView = () => {
  const numberOfIcecreams = useSelector((state) => state.icecream.numberOfIcecreams)

  return (
    <div>
        <h2>Number of icecream - {numberOfIcecreams} </h2>
        <button>Order cake</button>
        <button>Restock icecream</button>
    </div>
  )
}
