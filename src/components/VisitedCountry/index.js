// VisitedCountry.js

import {useState} from 'react'

const VisitedCountry = props => {
  const {country, handleRemove} = props
  const {id, name, imageUrl} = country
  const [isVisited, setIsVisited] = useState(true)

  const handleClick = () => {
    handleRemove(id)
  }

  const handleToggleVisit = () => {
    setIsVisited(!isVisited)
  }

  return (
    <li className="bg1">
      <div>
        <img src={imageUrl} alt="thumbnail" style={{width: '200px'}} />
      </div>
      <p>{name}</p>
      {isVisited ? (
        <>
          <button type="button" onClick={handleToggleVisit}>
            Visit
          </button>
          <button type="button" onClick={handleClick}>
            Remove
          </button>
        </>
      ) : (
        <button type="button" onClick={handleToggleVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default VisitedCountry
