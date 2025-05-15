# 🎬 Movie Explorer — TMDB API

This is a React web application that displays a list of movies using the [TMDB API](https://developer.themoviedb.org/docs). Users can browse, search, and view detailed information about movies.

<img width="1608" alt="Screenshot 2025-05-15 at 21 17 51" src="https://github.com/user-attachments/assets/d56aad02-5130-4e27-ac78-eff292d1eb00" />

## ✨ Features

- 🎞️ Movie list with poster, title, and release year
- 🔍 Search movies
- 🎯 Show movies by category:
  - Now Playing
  - Popular
  - Top Rated
  - Upcoming
- 📄 Movie detail page with:
  - Overview
  - Release date
- 🔄 Pagination
- ✅ Unit tested with React Testing Library
- 🎨 Styled using Tailwind CSS
- ⚙️ Built with Vite and TypeScript

---

## 📦 Tech Stack

- **React + TypeScript**
- **Vite**
- **React Router**
- **Tailwind CSS**
- **Axios**
- **Jest + React Testing Library**

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/movie-website.git
cd movie-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add Your TMDB API Key
Create a `.env` file in the root directory:
```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```
Get your key from: https://developer.themoviedb.org/docs/getting-started

### 4. Run the Development Server
```
npm run dev
```
Open http://localhost:5173 in your browser.

### 🧪 Running Tests
```
npm run test
```
Unit tests are written using React Testing Library and Jest.

### 🗂️ Project Structure
```
src/
├── api/              # Axios instance & API functions
├── components/       # Reusable UI components
├── pages/            # Route pages (Home, MovieDetail)
├── hooks/            # Custom Hooks
├── layour/           # Layout pages (MainLayout, MovieList)
├── types/            # TypeScript types
├── routes/           # Routes File
├── utils/            # Utils
├── App.tsx           # App routes
└── main.tsx          # App entry
```

### 📌 Notes
- This project uses Vite for fast development and build.
- Tailwind CSS is used via PostCSS with @tailwindcss/postcss.
- Error handling and loading states are implemented for better UX.
- Component structure follows best practices in separation of concerns and reusability.

### 🧑‍💻 Author
Built with ❤️ by Alfan Fauzy

### 📃 License
MIT — free to use and modify.
