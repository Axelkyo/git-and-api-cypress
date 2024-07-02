/// <reference types="Cypress" />
import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab')

describe("Request Method DELETE", function() {

    let data;

    it("Method: DELETE", function() {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/comments/10"
        }).then(function(dlt) {
            expect(dlt.status).to.eq(200)
        })
    })
})