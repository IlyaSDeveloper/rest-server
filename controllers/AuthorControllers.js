import Authors from '../models/Authors.js'
export const getAuthors = async (req, res, next) => {
    try {
        const authors = await Authors.findAll({})
        return res.status(200).json({
            data: authors,
            meta: {
                page: 1,
                per_page: 10,
                total_items: authors.length
            }
        })
    } catch (error) {
        return next(error.message)
    }
}
export const getAuthor = async (req, res, next) => {
    try {
        const author = await Authors.findByPk(req.params.id)
        return res.status(200).json(author)
    } catch (error) {
        return next(error.message)
    }
}

export const createAuthors = async (req, res, next) => {
    try {
        const author = await Authors.create(req.body)
        await author.reload()
        return res.status(201).json(author)
    } catch (error) {
        return next(error.message)
    }
}
export const changeAuthor = async (req, res, next) => {
    try {
        const author = await Books.findByPk(req.params.id)
        if (author) {
            author.first_name = req.body.first_name || author.first_name,
            author.last_name = req.body.last_name || author.last_name,
            author.birthday = req.body.birthday || author.birthday
        }
        author.save()
        return res.status(200).json(author)
    } catch (error) {
        return next(error.message)
    }
}
export const deleteAuthor = async (req, res, next) => {
    try {
        const author = await Books.findByPk(req.params.id)
        await author.destroy()
        return res.status(204).json(author)
    } catch (error) {
        return next(error.message)
    }
}