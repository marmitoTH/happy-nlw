const Institution = require('../models/Institution')

module.exports = {
  async index(req, res) {
    const institutions = await Institution.findAll()

    if (!institutions) {
      return res.status(404).json({ error: 'No institutions found' })
    }

    return res.json(institutions)
  },

  async get(req, res) {
    const { id } = req.params
    const institution = await Institution.findByPk(id)

    if (!institution) {
      return res.status(404).json({ error: 'Institution not found' })
    }

    return res.json(institution)
  },

  async store(req, res) {
    const {
      latitude,
      longitude,
      name,
      about,
      whatsapp,
      images,
      instructions,
      visitations,
      weekends
    } = req.body

    const institution = await Institution.create({
      latitude,
      longitude,
      name,
      about,
      whatsapp,
      images,
      instructions,
      visitations,
      weekends
    })

    return res.json(institution)
  }
}