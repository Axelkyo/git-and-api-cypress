/// <reference types="Cypress" />
import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab')

describe("Demo de una REST API - 2", function() {

    it("API 2", function() {

        const data = {
            "Nombre": "Atzael",
            "Ap": "Irigoyen",
            "Am": "Moncivias",
            "Tel": "6181342046",
            "Dir": "Demo de la Direccion",
            "Cursos": [
                {
                    "Nombre": "PHP",
                    "Descripcion": "Lenguaje de programacion PHP"
                },
                {
                    "Nombre": "Java",
                    "Descripcion": "Lenguaje de programacion Java"
                },
                {
                    "Nombre": "Python",
                    "Descripcion": "Lenguaje de programacion Python"
                }
            ]
        }

        cy.log(data.Nombre)
        cy.log(data.Dir)
        cy.log(data.Cursos)
        cy.log(data.Cursos[1])
        cy.log(data.Cursos[2].Nombre)
        cy.log(data.Cursos[2].Descripcion)

    })
})