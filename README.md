# 🎵 Spotify Clone Backend

A Node.js + Express + MongoDB backend for a Spotify-like music streaming application.  
This project implements authentication, music and album management, and user role-based access control.

---

## 🚀 Features

- **User Authentication**: JWT-based login and role management (`user`, `artist`).
- **Music Management**: Create, fetch, and manage music tracks with artist association.
- **Album Management**: Create and fetch albums with populated artist details.
- **Secure Access**: Middleware to protect routes and ensure authorized access.
- **Database Integration**: MongoDB with Mongoose models for users, music, and albums.

---

## 🛠️ Tech Stack

- **Backend Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Authentication**: [JWT](https://jwt.io/)
- **Environment Management**: `.env` for secrets (API keys, DB URI, JWT secret)

---

## 📂 Project Structure

```
spotify-clone-backend/
│── src/
│   ├── controller/     # Business logic (music, album, auth)
│   ├── middlewares/    # JWT auth middleware
│   ├── models/         # Mongoose schemas (User, Music, Album)
│   ├── routes/         # API route definitions
│   └── server.js       # Entry point
│── .env                # Environment variables (ignored in Git)
│── .gitignore          # Prevents node_modules & .env from being committed
│── package.json        # Dependencies and scripts
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Misskhat/spotify-clone-backend.git
   cd spotify-clone-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**  
   Create a `.env` file in the project root:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_TOKEN=your_secret_key
   ```

4. **Run the server**
   ```bash
   npm start
   ```

   The backend will run at `http://localhost:5000`.

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/auth/register` | Register new user/artist |
| `POST` | `/auth/login` | Login and receive JWT |

### Music
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/music` | Create new music (artist only) |
| `GET`  | `/music` | Fetch all music (authorized users) |

### Album
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/album` | Create new album (artist only) |
| `GET`  | `/album` | Fetch all albums |
| `GET`  | `/album/:albumById` | Fetch album by ID |

---

## 🔒 Security Notes

- Never commit `.env` or `node_modules` (already added to `.gitignore`).
- If secrets were exposed, regenerate them immediately.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Md. Mishkat**

- GitHub: [@Misskhat](https://github.com/Misskhat)
- Focus: MERN stack, backend development, AI-powered web apps
