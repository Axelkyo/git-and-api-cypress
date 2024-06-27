/// <reference types="Cypress" />
import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab')

describe("Demo de una REST API", function() {

    it("API 1", function() {

        const data = {
            "Nombre": "Atzael",
            "Ap": "Irigoyen",
            "Am": "Moncivias",
            "Tel": "6181342046",
            "Dir": "Demo de la Direccion"
        }

    cy.log(data["Nombre"])
    cy.log(data["Ap"])
    cy.log(data["Am"])
    cy.log(data["Tel"])
    cy.log(data["Dir"])
    })
})