import express from 'express'
export default function configurarApp() {

    const app = express();

    app.use(express.json());

    return app;
};