import React from "react"
import { useSelector } from "react-redux"

export const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes)
  return (
    <div>
        <h2>Number of Cakes - {numberOfCakes}</h2>
        <button>Order cake</button>
        <button>Restock cakes</button>
    </div>
  )
}
