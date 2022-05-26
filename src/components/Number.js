import { useParams } from "react-router-dom"


const Number = () => {
  let {num} = useParams()
  return (
    <p>The number is: {num} </p>
  )
}

export default Number