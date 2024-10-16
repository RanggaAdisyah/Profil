import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware untuk mengakses file statis
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint untuk mengirim file HTML profil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'profil.html')); // Pastikan path sesuai
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
