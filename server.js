import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import morgan from 'morgan';
import { port } from './app/config/vars.js';
import './app/config/db.js';  // Ensure the db.js file runs

// Load environment variables

// Import the router
import postRoutes from './app/routes/post_router.js';  // Synchronous import

// Start express
const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Initial route
app.get('/', (req, res) => {
    res.json({ msg: "Hello world" });
});

// Use the router
app.use('/', postRoutes);

// Create server connection
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

export { app }

