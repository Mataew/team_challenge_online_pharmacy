const Drug = require('../models/Drug.model')

module.exports.drugsController = {
  addDrug: async (req, res) => {
    try {
      await Drug.create({
        name: req.body.name,
        price: req.body.price,
        recipe: req.body.recipe,
        category: req.body.category
      })
      res.send('Drug added in catalog')
    } catch (e) {
      res.send(e)
    }
  },
  deleteDrug: async (req, res) => {
    try {
      await Drug.findByIdAndDelete(req.params.id)
      res.send('Drug delete in catalog')
    } catch (e) {
      res.send(e)
    }
  },
  patchDrug: async (req, res) => {
    try {
      await Drug.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        recipe: req.body.recipe,
        category: req.body.category
      })
    } catch (e) {
      res.send(e)
    }
  },
  getDrugsCategory: async (req, res) => {
    try {
      const drugs = await Drug.find({ category: req.params.id })
      res.json(drugs)
    } catch (e) {
      res.send(e)
    }
  },
  getDrug: async (req, res) => {
    try {
      const drugs = await Drug.find()
      res.json(drugs)
    } catch (e) {
      res.send(e)
    }
  },
  getDrugsId: async (req, res) => {
    try {
      const drugs = await Drug.findById(req.params.id).populate('category')
      res.json(drugs)
    } catch (e) {
      res.send(e)
    }
  }

}