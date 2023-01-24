import Genres from '../models/Genres.js'
export const getGenres = async (req, res, next) => {
    try {
        const genres = await Genres.findAll({})
        return res.status(200).json({
            data: genres,
            meta: {
                page: 1,
                per_page: 10,
                total_items: genres.length
            }
        })
    } catch (error) {
        return next(error.message)
    }
}
export const getGenre = async (req, res, next) => {
    try {
        const genre = await Genres.findByPk(req.params.id)
        return res.status(200).json(genre)
    } catch (error) {
        return next(error.message)
    }
}

export const createGenres = async (req, res, next) => {
    try {
        const genre = await Genres.create(req.body)
        await genre.reload()
        return res.status(201).json(genre)
    } catch (error) {
        return next(error.message)
    }
}
export const changeGenre = async (req, res, next) => {
    try {
        const genre = await Books.findByPk(req.params.id)
        if (genre) {
            genre.name = req.body.name || genre.name
        }
        genre.save()
        return res.status(200).json(genre)
    } catch (error) {
        return next(error.message)
    }
}
export const deleteGenre = async (req, res, next) => {
    try {
        const genre = await Books.findByPk(req.params.id)
        await genre.destroy()
        return res.status(204).json(genre)
    } catch (error) {
        return next(error.message)
    }
}