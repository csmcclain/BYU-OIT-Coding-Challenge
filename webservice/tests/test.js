import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

describe("BasePath", ()=> {
    describe("GET /", () => {
        it("should return 200 and be happy", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res)=> {
                    res.should.have.status(200);
                    done();
                })
        })
    })
})