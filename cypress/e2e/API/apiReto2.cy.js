/// <reference types="Cypress" />
import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab')

describe("Request Method DELETE", function() {

    let data;

    it("Method: DELETE", function() {
        for(let x=1; x<=9; x++){
            cy.request({
                method: "DELETE",
                url: `http://localhost:3000/comments/${x}`
            })
                .then(function(dlt) {
                    expect(dlt.status).to.eq(200)
                })
            cy.wait(1000)
        }
    })
})