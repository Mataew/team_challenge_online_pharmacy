const { Router } = require('express')
const { drugsController } = require('../controller/drugs.controller')
const router = Router()

router.post('/admin/drugs', drugsController.addDrug)
router.patch('/admin/drugs/:id', drugsController.patchDrug)
router.delete('/admin/drugs/:id', drugsController.deleteDrug)
router.get('/drugs', drugsController.getDrug)
router.get('/drugs/:id', drugsController.getDrugsId)
router.get('/drugs/category/:id', drugsController.getDrugsCategory)

module.exports = router