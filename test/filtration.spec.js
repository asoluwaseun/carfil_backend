const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')
const should = chai.should()

chai.use(chaiHttp)

describe('Filtration Endpoint', () => {
    it('should fetch all car owners based on filter',(done) => {
        chai.request(app)
            .get(`/api/v1/car-owners?filter=${Math.ceil(Math.random() * 10)}`)
            .end((err, res) => {
                if(err){
                    res.should.have.status(500)
                    done()
                }

                res.should.have.status(200)
                res.body.should.be.property('data')
                res.body.data.should.be.a('array')
                res.body.should.be.property('message')
                res.body.message.should.be.a('string')
                done();
            });
    })
})

describe('Filters Endpoint', () => {
    it('should fetch all filters',(done) => {
        chai.request(app)
            .get('/api/v1/filters')
            .end((err, res) => {
                if(err){
                    res.should.have.status(500)
                    done()
                }

                res.should.have.status(200)
                res.body.should.be.property('data')
                res.body.data.should.be.a('array')
                res.body.should.be.property('message')
                res.body.message.should.be.a('string')
                done();
            });
    })
})
