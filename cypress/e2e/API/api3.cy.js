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
    it("GET 3", function() {
    // Example From Udemy
        data = cy.request("http://localhost:3000/posts")
            .should( function(response) {
                expect(response.status).to.eq(200)
            })
    })
})