const VisitedCountry = props => {
  const {country, handleRemove} = props
  const {id, name, imageUrl} = country

  const handleClick = () => {
    handleRemove(id)
  }

  return (
    <div>
      <li className="bg1">
        <div>
          <img src={imageUrl} alt="thumbnail" style={{width: '200px'}} />
        </div>
        <p>{name}</p>
        <button type="button" onClick={handleClick}>
          Remove
        </button>
      </li>
    </div>
  )
}

export default VisitedCountry
