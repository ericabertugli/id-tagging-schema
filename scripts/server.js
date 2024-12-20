import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = process.env.PORT  
 || 3000; // Adjust port as needed

app.use(cors());
app.use(express.static('../../id-tagging-schema'));
app.get('/package.json', (req, res) => {
  res.sendFile('../../id-tagging-schema/package.json');
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
