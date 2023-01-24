import Books from '../models/Books.js'
export const getBooks = async (req, res, next) => {
    try {
        const books = await Books.findAll({})
        return res.status(200).json({
            data: books,
            meta: {
                page: 1,
                per_page: 10,
                total_items: books.length
            }
        })
    } catch (error) {
        return next(error.message)
    }
}
export const getBook = async (req, res, next) => {
    try {
        const book = await Books.findByPk(req.params.id)
        return res.status(200).json(book)
    } catch (error) {
        return next(error.message)
    }
}

export const createBooks = async (req, res, next) => {
    try {
        const book = await Books.create(req.body)
        await book.reload()
        return res.status(201).json(book)
    } catch (error) {
        return next(error.message)
    }
}
export const changeBook = async (req, res, next) => {
    try {
        const book = await Books.findByPk(req.params.id)
        if (book) {
            book.name = req.body.name || book.name,
            book.published = req.body.published || book.published,
            book.author_id = req.body.author_id || book.author_id,
            book.genre_id = req.body.genre_id || book.genre_id
        }
        book.save()
        return res.status(200).json(book)
    } catch (error) {
        return next(error.message)
    }
}
export const deleteBook = async (req, res, next) => {
    try {
        const book = await Books.findByPk(req.params.id)
        await book.destroy()
        return res.status(204).json(book)
    } catch (error) {
        return next(error.message)
    }
}

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