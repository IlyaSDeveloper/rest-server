import express from 'express'
import { Op } from 'sequelize'
import * as BookControllers from '../controllers/BookControllers.js'
import * as AuthorControllers from '../controllers/AuthorControllers.js'
import * as GenreControllers from '../controllers/GenreControllers.js'
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.send('Home page')
})

// ------------------------------Books----------------------------------

// router.get('/books/', (async (req, res) => {
//     const books = await Books.findAll({
//         where: {
//             name: {
//                 [Op.like]: `%${req.query.name}%`
//             }
//         }
//     })
//         return res.status(200).json({
//             data: books
//         })
//     })
// )

router.get('/books', BookControllers.getBooks)
router.get('/books/:id', BookControllers.getBook)
router.post('/books', BookControllers.createBooks)
router.patch('/books/:id', BookControllers.changeBook)
router.delete('/books/:id', BookControllers.deleteBook)

// ------------------------------Authors----------------------------------

router.get('/authors', AuthorControllers.getAuthors)
router.get('/authors/:id', AuthorControllers.getAuthor)
router.post('/authors', AuthorControllers.createAuthors)
router.patch('/authors/:id', AuthorControllers.changeAuthor)
router.delete('/authors/:id', AuthorControllers.deleteAuthor)

// ------------------------------Genres----------------------------------

router.get('/genres', GenreControllers.getGenres)
router.get('/genres/:id', GenreControllers.getGenre)
router.post('/genres', GenreControllers.createGenres)
router.patch('/genres/:id', GenreControllers.changeGenre)
router.delete('/genres/:id', GenreControllers.deleteGenre)

export default router