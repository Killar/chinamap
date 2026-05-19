const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

const DATA_FILE = path.join(__dirname, 'visited-spots.json');

function initDataFile() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
}

app.get('/api/visited', (req, res) => {
  try {
    const data = fs.readFileSync(DATA_FILE, { encoding: 'utf8' });
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({ error: 'Failed to read data' });
  }
});

app.post('/api/visited', (req, res) => {
  try {
    const { visitedSpots } = req.body;
    if (!Array.isArray(visitedSpots)) {
      return res.status(400).json({ error: 'Invalid data format' });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(visitedSpots, null, 2), 'utf8');
    res.json({ success: true, count: visitedSpots.length });
  } catch (error) {
    console.error('Error writing data:', error);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

initDataFile();

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});