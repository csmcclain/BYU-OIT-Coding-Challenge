const expect = require('chai').expect;
const axios = require('axios');

const baseURL = 'http://localhost:3001';

describe("BasePath", ()=> {
    describe("GET /", () => {
        it("should return 200 and be happy", async () => {
            let response = await axios.get(`${baseURL}/`);
            expect(response.status).to.equal(200);
        });
    });
})

describe("MoviesEndpoint", () => {
    describe("GET /movies", () => {
        it("should return 400 when no query parameters are sent", async () => {
            let response = await axios.get(`${baseURL}/movies`, {
                validateStatus: (status) => { return status < 500 }
            });
            expect(response.status).to.equal(400);
        });

        it("should return 400 when empty query parameters are sent", async () => {
            response = await axios.get(`${baseURL}/movies?search=`, {
                validateStatus: (status) => { return status < 500 }
            });
            expect(response.status).to.equal(400);
        });

        it("should return 10 results when tron is used as query parameter", async () => {
            let response = await axios.get(encodeURI(`${baseURL}/movies?search=tron`));
            expect(response.data.length).to.equal(10);
        });

        it("should return 1 result when tron legacy is used as query parameter", async () => {
            let response = await axios.get(encodeURI(`${baseURL}/movies?search=tron legacy`));
            expect(response.data.length).to.equal(1);
        });
    });
})