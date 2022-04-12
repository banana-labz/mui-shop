import { useParams } from "react-router"

export const DetailsPage = () => {
  const { id } = useParams()
  return (
    <>
      {id}
    </>
  )
}