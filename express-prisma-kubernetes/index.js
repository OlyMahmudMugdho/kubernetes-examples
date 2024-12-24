const express = require("express");
const { PrismaClient } = require("@prisma/client");
const dotenv = require("dotenv");

dotenv.config();
const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Routes
app.get("/users", async (req, res) => {
    try {
        const result = await prisma.user.findMany();
        res.json(result)
    } catch (error) {
        console.error('Prisma error:', error);
    }

});

app.post("/users", async (req, res) => {
    const { name, email } = req.body;
    const user = await prisma.user.create({ data: { name, email } });
    res.status(201).json(user);
});

app.get('/', async (req, res) => {
    try {
      await prisma.$connect();
      res.json("connected")
    } catch (err) {
      console.error('Database connection error:', err);
      res.status(500).send('Failed to connect to the database');
    }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
