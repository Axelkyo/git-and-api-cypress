/// <reference types="Cypress" />
import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab')

describe("Challenge Fill The API", function() {

    let data;

    it("Filling the API:", function() {
        for(let x=1; x<=10; x++){
            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts",
                body: {
                    "id": `${x}`,
                    "title": `Adding a POST from Cypress ${x}`,
                    "views": `${x}`
                }
            }).then(function(post) {
                expect(post.status).to.eq(201)
            })
            cy.wait(1000)
            cy.request({
                method:"POST",
                url: "http://localhost:3000/comments",
                body: {
                    "id": `${x}`,
                    "text": `Several Posts from Cypress ${x}`,
                    "postId": `${x}`
                }
            })
            cy.wait(1000)
        }
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/profile",
            body: {
                "name": "AxelKyo"
            }
        })
    })
})