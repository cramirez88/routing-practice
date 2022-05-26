import { useParams } from "react-router-dom"

const Word = () => {
  let {word} = useParams()

  return (
    <p>The word is: {word}</p>
  )
}

export default Word