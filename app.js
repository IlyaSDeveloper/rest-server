import express from 'express'
import Books from './models/Books.js'
import Authors from './models/Authors.js'
import Genres from "./models/Genres.js"
import apiRoutes from './routes/apiRoutes.js'

const app = express()
const port = 3000
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', apiRoutes)

// app.route('/books') 
//     .get (async (req, res) => {
//         const books = await Books.findAll({});
//         return res.status(200).json({
//             data: books,
//             meta: {
//                 page: 1,
//                 per_page: 10,
//                 total_items: books.length
//             }
//         })
//     })
//     .post(async (req, res) => {
//         try {
//             const book = await Books.create(req.body);
//             await book.reload()
//             return res.status(200).json(book)
//         } catch (error) {
//             console.log(error.message);
//         }
//     })

// app.route('/books:id')
//     .get(async (req, res) => {
//         const book = await Books.findByPk(req.params.id);
//         return res.status(200).json(book)
//     })
//     .patch(async (req, res) => {
//         try {
//             const book = await Books.findByPk(req.params.id);
//             if (book) {
//                 book.name = req.body.name || book.name,
//                 book.published = req.body.published || book.published,
//                 book.author_id = req.body.author_id || book.author_id,
//                 book.genre_id = req.body.genre_id || book.genre_id
//             }
//             book.save()
//             return res.status(200).json(book)
//         } catch (error) {
//             console.log(error.message);
//         }
//     })
//     .delete('/books/:id', async (req, res) => {
//         try {
//             const book = await Books.findByPk(req.params.id);
//             await book.destroy()
//             return res.status(204).json(book)
//         } catch (error) {
//             console.log(error.message);
//         }
//     })

// app.get('/authors', async (req, res) => {
//     const authors = await Authors.findAll({});
//     return res.status(200).json({
//         data: authors
//     })
// })
// app.get('/genres', async (req, res) => {
//     const genres = await Genres.findAll({});
//     return res.status(200).json({
//         data: genres
//     })
// })

// Books.sequelize.sync({
//     alter: true,
//     force: false
// }).then(() => {
//     app.listen(port, () => {
//         console.log(`listening on: http://localhost:${port}`);
//     })
// })

// Authors.sequelize.sync({
//     alter: true,
//     force: false
// }).then(() => {
//     app.listen(port, () => {
//         console.log(`listening on: http://localhost:${port}`);
//     })
// })

// Genres.sequelize.sync({
//     alter: true,
//     force: false
// }).then(() => {
//     app.listen(port, () => {
//         console.log(`listening on: http://localhost:${port}`);
//     })
// })

app.listen(port, async () => {
    try {
        await Books.sync({
            alter: true,
            force: false
        })
        await Authors.sync({
            alter: true,
            force: false
        })
        await Genres.sync({
            alter: true,
            force: false
        })
    } catch (error) {
        console.log(error);
    }
}) 