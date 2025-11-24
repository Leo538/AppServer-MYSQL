
import mysql from 'mysql2/promise'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const movies = require('./movies.json') 

const pool = await mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'movies',
  port: parseInt(process.env.DB_PORT) || 3306
})

for (const m of movies) {
  await pool.query(
    `INSERT INTO peliculas (id, title, year, director, duration, poster, genre, rate)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE title = VALUES(title)`,
    [m.id, m.title, m.year, m.director, m.duration, m.poster, JSON.stringify(m.genre), m.rate]
  )
}

console.log('Películas importadas correctamente')
await pool.end()
