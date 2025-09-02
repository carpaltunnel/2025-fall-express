import express from 'express';
import { ChickenController } from './controllers/chickens.controller.js';
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/v1/chickens', ChickenController.getChickens);
app.get('/api/v1/chickens/:id', ChickenController.getChicken);
app.post('/api/v1/chickens', ChickenController.createChicken);
app.put('/api/v1/chickens/:id', ChickenController.replaceChicken);
app.patch('/api/v1/chickens/:id', ChickenController.updateChicken);
app.delete('/api/v1/chickens/:id', ChickenController.deleteChicken);

app.listen(port, () => {
    console.log(`Chicken API is listening at http://localhost:${port}`);
});