import './index.css'

const CountryList = props => {
  const {country, handleVisit} = props
  const {id, name, isVisited} = country

  const handleClick = () => {
    handleVisit(id)
  }

  return (
    <li className="bg1">
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button className="btn" type="button" onClick={handleClick}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryList
