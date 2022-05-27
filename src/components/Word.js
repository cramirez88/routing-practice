import React, { useParams } from "react-router-dom"

const Params = () => {
  let {word,textColor, backgroundColor} = useParams()

return (
  <>
  {
    isNaN(word)? 
  <p style={{color:textColor, backgroundColor: backgroundColor}}>The word is {word}</p>:
  <p style={{color:textColor, backgroundColor: backgroundColor}}>The number is {word}</p>
}
  </>

 
)
  
  
}

export default Params