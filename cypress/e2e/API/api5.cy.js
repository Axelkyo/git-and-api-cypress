/// <reference types="Cypress" />
import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab')

describe("API method POST", function() {

    let data;

    it("POST method:", function() {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                "id": "5",
                "title": "Adding a POST from Cypress",
                "views": "150"
            }
        }).then(function(post) {
            expect(post.status).to.eq(201)
        })
    })
})