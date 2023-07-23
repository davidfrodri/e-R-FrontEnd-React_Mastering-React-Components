import Photos from "../Photos/Photos"
import usePhotos from "../../hooks/usePhotos"


const Main = () => {
 
  const { photos } = usePhotos()

  return (
    <div>
        <Photos dataPhotos={photos} />
    </div>
  )
}

export default Main