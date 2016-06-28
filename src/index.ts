let express    = require('express')
let request    = require('request')
let bodyParser = require('body-parser')

import * as Models from './models'

import CONFIG from './config'

const WP_REQUEST_HEADERS = {
    'Authorization': 'Basic ' + new Buffer(CONFIG.wp.auth.username + ':' + CONFIG.wp.auth.password).toString('base64'),
    'Content-Type' : 'application/x-www-form-urlencoded'
}

let api = express()

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({
    extended: true
}))

api.use(function(req, res, next) {
    res.header('Cache-Control: no-cache')
    res.header('Content-Type','application/json')
    res.header('Access-Control-Allow-Origin', CONFIG.environment.whitelist)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST')
    next()
})

api.post('/application', function(req, res) {
    let body = {
        title            : '[' + new Date().toDateString() + '] ' + req.body.first_name + ' ' + req.body.last_name,
        status           : 'pending',
        acf              : {
            first_name            : req.body.first_name              || '',
            last_name             : req.body.last_name               || '',
            gender                : req.body.gender                  || '',
            email                 : req.body.email                   || '',
            phone_number          : req.body.phone_number            || '',
            twitter_handle        : req.body.twitter_handle          || '',
            linkedin_url          : req.body.linkedin_url            || '',
            referred_by           : req.body.referred_by             || '',
            language              : req.body.language                || '',
            current_location      : req.body.current_location        || '',
            current_occupation    : req.body.current_occupation      || '',
            reason_for_application: req.body.reason_for_application  || '',
            education_level       : req.body.education_level         || '',
            hobbies               : req.body.hobbies                 || '',
            plans_after_training  : req.body.plans_after_training    || '',
            coding_background     : req.body.coding_background       || ''
        }
    }
    request({
        url    : CONFIG.wp.url + '/application',
        method : 'POST',
        headers: WP_REQUEST_HEADERS,
        form   : body
    }, function(error, response, body) {
        if (error) {
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })
})

api.get('/[' + Object.keys(CONFIG.wp.endpoint).join('|') + ']*', function(req, res) {
    let query = req.url
    let name  = req.path.split('/')[1]
    let type  = name.charAt(0).toUpperCase() + name.slice(1)
    request({
        url    : CONFIG.wp.url + query.replace(name, CONFIG.wp.endpoint[name]),
        method : 'GET',
        headers: WP_REQUEST_HEADERS
    }, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            let bodyJson = JSON.parse(body)
            let object = {}
            try {
                if (Array.isArray(bodyJson)) {
                    object = bodyJson.map(function (item) {
                        return new Models[type](item)
                    })
                }
                else {
                    object = new Models[type](bodyJson)
                }
            } catch (e) {}
            res.send(object)
        } else {
            console.log(error)
            res.sendStatus(404)
        }
    })
})

api.get('*', function(req, res) {
    res.sendStatus(404)
})

api.listen(CONFIG.environment.port)