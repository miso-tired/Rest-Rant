const router = require('express').Router()

// GET /places/new
router.get ('/new', (req, res) => {
    res.render('places/new')
})

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/H-Thai-ML.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Cat-Cafe.jpg'
      }]
      res.render('places/index', { places })
  })
  

module.exports = router