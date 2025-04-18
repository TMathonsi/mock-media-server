const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

// Mock Data
let movies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
  { id: 2, title: "Interstellar", director: "Christopher Nolan", year: 2014 }
];

let series = [
  { id: 1, title: "Breaking Bad", seasons: 5, genre: "Crime Drama" },
  { id: 2, title: "Stranger Things", seasons: 4, genre: "Sci-Fi" }
];

let songs = [
  { id: 1, title: "Bohemian Rhapsody", artist: "Queen", year: 1975 },
  { id: 2, title: "Blinding Lights", artist: "The Weeknd", year: 2019 }
];

// === MOVIES ENDPOINTS ===
app.get('/movies', (req, res) => res.json(movies));

app.post('/movies', (req, res) => {
  const newMovie = req.body;
  movies.push({ id: movies.length + 1, ...newMovie });
  res.json(movies);
});

app.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  movies = movies.map(m => m.id == id ? { ...m, ...req.body } : m);
  res.json(movies);
});

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  movies = movies.filter(m => m.id != id);
  res.json(movies);
});

// === SERIES ENDPOINTS ===
app.get('/series', (req, res) => res.json(series));

app.post('/series', (req, res) => {
  const newSeries = req.body;
  series.push({ id: series.length + 1, ...newSeries });
  res.json(series);
});

app.put('/series/:id', (req, res) => {
  const { id } = req.params;
  series = series.map(s => s.id == id ? { ...s, ...req.body } : s);
  res.json(series);
});

app.delete('/series/:id', (req, res) => {
  const { id } = req.params;
  series = series.filter(s => s.id != id);
  res.json(series);
});

// === SONGS ENDPOINTS ===
app.get('/songs', (req, res) => res.json(songs));

app.post('/songs', (req, res) => {
  const newSong = req.body;
  songs.push({ id: songs.length + 1, ...newSong });
  res.json(songs);
});

app.put('/songs/:id', (req, res) => {
  const { id } = req.params;
  songs = songs.map(s => s.id == id ? { ...s, ...req.body } : s);
  res.json(songs);
});

app.delete('/songs/:id', (req, res) => {
  const { id } = req.params;
  songs = songs.filter(s => s.id != id);
  res.json(songs);
});

// === 404 for Any Other Route ===
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// === Start Server ===
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
