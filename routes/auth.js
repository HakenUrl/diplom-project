const {Router}= require('express')
const router = Router()
const controller = require('../controllers/auth')
const upload = require('../middleware/upload')
const passport = require('passport')
router.post('/login', controller.login)
router.post('/register', controller.register)
router.patch('/update',passport.authenticate('jwt', {session: false}),upload.single('image'),controller.update)
router.get('/info',passport.authenticate('jwt', {session: false}), controller.info)
module.exports = router