import './App.css'
import Movie from './components/movie'

const App = () => {
  /////////// MOVIES AS OBJECTS

  // const fellowship = {
  //   title: 'The Fellowship of the Ring',
  //   hours: 2,
  //   minutes: 58,
  //   poster:
  //     'https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg'
  // }

  // const towers = {
  //   title: 'The Two Towers',
  //   hours: 2,
  //   minutes: 59,
  //   poster:
  //     'https://image.tmdb.org/t/p/original/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg'
  // }

  // const king = {
  //   title: 'The Return of the King',
  //   hours: 3,
  //   minutes: 21,
  //   poster:
  //     'https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg'
  // }

  /////////// MOVIES AS OBJECTS

  /////////// MOVIES AS ARRAY OF OBJECTS
  const movies = [
    {
      title: 'The Fellowship of the Ring',
      hours: 2,
      minutes: 58,
      poster:
        'https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg'
    },
    {
      title: 'The Two Towers',
      hours: 2,
      minutes: 59,
      poster:
        'https://image.tmdb.org/t/p/original/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg'
    },
    {
      title: 'The Return of the King',
      hours: 3,
      minutes: 21,
      poster:
        'https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg'
    }
  ]
  /////////// MOVIES AS ARRAY OF OBJECTS

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lord of the Rings</h1>
      </header>
      <main>
        <Movie movies={movies} />
        {/* PASSING ARRAY OF MOVIES */}
        {/* <Movie fellowship={fellowship} towers={towers} king={king} /> */}
        {/* PASSING EACH OBJECT */}
      </main>
    </div>
  )
}

export default App
