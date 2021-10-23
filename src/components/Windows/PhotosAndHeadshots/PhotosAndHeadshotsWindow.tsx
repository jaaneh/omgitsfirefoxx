import { useContext } from 'react'

import StateContext from '@context/StateContext'
import WindowBase from '../Windows'

const PhotosAndHeadshotsWindow = ({ constraintsRef }): JSX.Element => {
  const { photosOpen, setPhotosOpen } = useContext(StateContext)

  return (
    <WindowBase
      constraintsRef={constraintsRef}
      iconSrc='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAcUlEQVQokbWSuwrEMAwEZ5MU99eW//oas1fEuRckjh0yIFgkBqmQbAOQc15DJaUkWtgmIvxP7XFUVdybH8vydncnklhq7JYjYBrZunGPXMqjKS+fKGwhAZh5fp6X7QmpNIVv3mf3ij/yCJdkAUMfdpkXnNBzP4PBucgAAAAASUVORK5CYII='
      title='Photograpgy and Headshots'
      isOpen={photosOpen}
      setIsOpen={setPhotosOpen}
    >
      <p>Photos Window</p>
    </WindowBase>
  )
}

export default PhotosAndHeadshotsWindow
