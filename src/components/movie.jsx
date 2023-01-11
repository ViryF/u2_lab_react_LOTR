const Movie = ({fellowship, towers, king}) => {

  return (
    <div>
      <h1> {fellowship.title}</h1>
      <p>Runtime: {fellowship.hours}:{fellowship.minutes} </p>
      <img src={fellowship.poster} alt="fellowship of the ring" />
      <h1>{towers.title}</h1>
      <p>Runtime: {towers.hours}:{towers.minutes} </p>
      <img src={towers.poster} alt="the two towers" />
      <h1>{king.title}</h1>
      <p>Runtime: {king.hours}:{king.minutes} </p>
      <img src={king.poster} alt="return of the king" />
    </div>
  )
}

export default Movie