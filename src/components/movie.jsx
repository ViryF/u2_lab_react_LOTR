// const Movie = ({fellowship, towers, king}) => {
const Movie = (props) => {

  return (
    <div>
      {
      props.movies?.map((movie) =>(
        <div className="movie-card" key={movie.id}>
          <h1>{movie.title}</h1>
          <p>Runtime: {movie.hours}: {movie.minutes}</p>
          <img src={movie.poster} alt="poster" />
        </div>
      ))}
      
      {/* <h1> {movies[0].title}</h1>
      <p>Runtime: {movies[0].hours}:{movies[0].minutes} </p>
      <img src={movies[0].poster} alt="fellowship of the ring" /> */}
      {/* <h1> {fellowship.title}</h1>
      <p>Runtime: {fellowship.hours}:{fellowship.minutes} </p>
      <img src={fellowship.poster} alt="fellowship of the ring" /> */}
      {/* <h1>{movies[1].title}</h1>
      <p>Runtime: {movies[1].hours}:{movies[1].minutes} </p>
      <img src={movies[1].poster} alt="the two towers" /> */}
      {/* <h1>{towers.title}</h1>
      <p>Runtime: {towers.hours}:{towers.minutes} </p>
      <img src={towers.poster} alt="the two towers" /> */}
      {/* <h1>{movies[2].title}</h1>
      <p>Runtime: {movies[2].hours}:{movies[2].minutes} </p>
      <img src={movies[2].poster} alt="return of the king" /> */}
      {/* <h1>{king.title}</h1>
      <p>Runtime: {king.hours}:{king.minutes} </p>
      <img src={king.poster} alt="return of the king" /> */}
    </div>
  )
}

export default Movie