import express from 'express'
const { Op } = require('sequelize')
import Books from '../models/Books.js'
import Authors from '../models/Authors.js'
import Genres from '../models/Genres.js'
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

router.get('/books', (async (req, res) => {
    const books = await Books.findAll({});
        return res.status(200).json({
            data: books,
            meta: {
                page: 1,
                per_page: 10,
                total_items: books.length
            }
        })
    })
)

router.post('/books', (async (req, res) => {
        try {
            const book = await Books.create(req.body);
            await book.reload()
            return res.status(201).json(book)
        } catch (error) {
            console.log(error.message);
        }
    })
)

router.get('/books/:id', ( async (req, res) => {
        const book = await Books.findByPk(req.params.id);
        return res.status(200).json(book)
    })
)
router.patch('/books/:id', (async (req, res) => {
        try {
            const book = await Books.findByPk(req.params.id);
            if (book) {
                book.name = req.body.name || book.name,
                book.published = req.body.published || book.published,
                book.author_id = req.body.author_id || book.author_id,
                book.genre_id = req.body.genre_id || book.genre_id
            }
            book.save()
            return res.status(200).json(book)
        } catch (error) {
            console.log(error.message);
        }
    })
)
router.delete('/books/:id', (async (req, res) => {
        try {
            const book = await Books.findByPk(req.params.id);
            await book.destroy()
            return res.status(204).json(book)
        } catch (error) {
            console.log(error.message);
        }
    })
)

// router.get('/books/nameIn=:', (async (req, res) => {
//     const books = await Books.findAll({
//         where: {
//             [Op.like]: `%${req.params.nameIn}%`
//         }
//     });
//         return res.status(200).json({
//             data: books
//         })
//     })
// )
// ------------------------------Authors----------------------------------

router.get('/authors', (async (req, res) => {
    const authors = await Authors.findAll({});
        return res.status(200).json({
            data: authors,
            meta: {
                page: 1,
                per_page: 10,
                total_items: authors.length
            }
        })
    })
)

router.post('/authors', (async (req, res) => {
        try {
            const author = await Authors.create(req.body);
            await author.reload()
            return res.status(201).json(author)
        } catch (error) {
            console.log(error.message);
        }
    })
)

router.get('/authors/:id', ( async (req, res) => {
        const author = await Authors.findByPk(req.params.id);
        return res.status(200).json(author)
    })
)
router.patch('/authors/:id', (async (req, res) => {
        try {
            const author = await Authors.findByPk(req.params.id);
            if (author) {
                author.first_name = req.body.first_name || author.first_name,
                author.last_name = req.body.last_name || author.last_name,
                author.birthday = req.body.birthday || author.birthday
            }
            author.save()
            return res.status(200).json(author)
        } catch (error) {
            console.log(error.message);
        }
    })
)
router.delete('/authors/:id', (async (req, res) => {
        try {
            const author = await Authors.findByPk(req.params.id);
            await author.destroy()
            return res.status(204).json(author)
        } catch (error) {
            console.log(error.message);
        }
    })
)

// ------------------------------Genres----------------------------------

router.get('/genres', (async (req, res) => {
    const genres = await Genres.findAll({});
        return res.status(200).json({
            data: genres,
            meta: {
                page: 1,
                per_page: 10,
                total_items: genres.length
            }
        })
    })
)

router.post('/genres', (async (req, res) => {
        try {
            const genre = await Genres.create(req.body);
            await genre.reload()
            return res.status(201).json(genre)
        } catch (error) {
            console.log(error.message);
        }
    })
)

router.get('/genres/:id', ( async (req, res) => {
        const genre = await Genres.findByPk(req.params.id);
        return res.status(200).json(genre)
    })
)
router.patch('/genres/:id', (async (req, res) => {
        try {
            const genre = await Genres.findByPk(req.params.id);
            if (genre) {
                genre.name = req.body.name || genre.name
            }
            genre.save()
            return res.status(200).json(genre)
        } catch (error) {
            console.log(error.message);
        }
    })
)
router.delete('/genres/:id', (async (req, res) => {
        try {
            const genre = await Genres.findByPk(req.params.id);
            await genre.destroy()
            return res.status(204).json(genre)
        } catch (error) {
            console.log(error.message);
        }
    })
)

export default router