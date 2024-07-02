/// <reference types="Cypress" />
import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab')

describe("API method GET", function() {

    let data;

    it("GET 1", function() {

        data = cy.request("http://localhost:3000/posts")
        data.its("status").should("equal", 200)
    })

    it("GET 2", function() {

        data = cy.request("http://localhost:3000/posts")
            .then( function(get) {
                expect(get.status).to.eq(200)
            })
    })

    it("GET method:", function() {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(function(response) {
            data = response.body;
            cy.log(JSON.stringify(data))
            expect(data[0]).has.property("title", "JSON Server Conection")
            expect(data[0]).has.property("views", 100)
        })
    })
})