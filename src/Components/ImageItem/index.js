import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickImageItem} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickImage = () => {
    onClickImageItem(id)
  }

  return (
    <li>
      <button type="button" className="img-button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ImageItem
