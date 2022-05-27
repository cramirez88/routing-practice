import React, { useParams } from "react-router-dom"

const Params = () => {
  let {word} = useParams()

return (
  <>
  {
    isNaN(word)? 
  <p>The word is {word}</p>:
  <p>The number is {word}</p>
}
  </>

 
)
  
  
}

export default Params