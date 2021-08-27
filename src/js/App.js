import '../css/App.css';
import MoviesList from "./MoviesList";

function App() {
  let movies = [
      {
        "adult": false,
        "backdrop_path": "/xySCWwZVuU03xOsJfs1Qk8yG2DF.jpg",
        "genre_ids": [
          18,
          10749
        ],
        "id": 226979,
        "original_language": "en",
        "original_title": "Test",
        "overview": "San Francisco, 1985. Two opposites attract at a modern dance company. Together, their courage and resilience are tested as they navigate a world full of risks and promise, against the backdrop of a disease no one seems to know anything about.",
        "popularity": 5.845,
        "poster_path": "/tTWRomgIMOoIB3CJLPlVbqSawEm.jpg",
        "release_date": "2013-06-29",
        "title": "Test",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 107
      },
      {
        "adult": false,
        "backdrop_path": "/dS933c3Yv9Qxi4DU9yaW1WfFhCC.jpg",
        "genre_ids": [
          27,
          53
        ],
        "id": 749645,
        "original_language": "en",
        "original_title": "The Beta Test",
        "overview": "A married Hollywood agent receives a mysterious letter for an anonymous sexual encounter and becomes ensnared in a sinister world of lying, infidelity, and digital data.",
        "popularity": 6.937,
        "poster_path": "/rqX3bH4h46U9hQTReEjWWHBTbnv.jpg",
        "release_date": "2021-11-05",
        "title": "The Beta Test",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/rG2jdLdj4U55MgI3g9f85w2th1y.jpg",
        "genre_ids": [
          28,
          878,
          53
        ],
        "id": 401123,
        "original_language": "en",
        "original_title": "Beta Test",
        "overview": "While testing the latest first person shooter from global game developer, Sentinel, video game champion Max Troy discovers the events happening within the game are being reflected in the real world. He soon determines that the game's protagonist is real-life Orson Creed, an ex-Sentinel employee who is being remotely controlled by the corporation for reasons unknown. As virtual and real worlds collide, Max and Creed must join forces to unravel the conspiracy before the game's sinister events escalate and overwhelm the city.",
        "popularity": 6.741,
        "poster_path": "/zKisJfMxpp0KfX4P3VyDrH0edg6.jpg",
        "release_date": "2016-07-22",
        "title": "Beta Test",
        "video": false,
        "vote_average": 5.3,
        "vote_count": 142
      }
    ];

  return (
    <div className="App">
      <MoviesList movies={movies}/>
    </div>
  );
}

export default App;
