import './App.css'
import Movie from './components/movie'

const App = () => {
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lord of the Rings</h1>
      </header>
      <main>
        <Movie movies={movies} />
        {/* <Movie fellowship={fellowship} towers={towers} king={king} /> */}
      </main>
    </div>
  )
}

export default App
