import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET;

const users = [
  {
    id: 1,
    username: "alice",
    password: bcrypt.hashSync("password123", 10), // hashed
    role: "employee"
  },
  {
    id: 2,
    username: "bob",
    password: bcrypt.hashSync("adminpass", 10),
    role: "admin"
  }
];

// --- Login Route ---
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log(username, password)

  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token, username });
});

app.get("/protected", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    res.json({ user });
  });
});

app.listen(PORT, () => {
  console.log(`Auth Backend running on http://localhost:${PORT}`);
});
