/// <reference types="cypress" />
export class CommunityPage {


    checkForSignInBtns() {

       cy.get('[id="MainHeader"]').find('.SignInLinks').
       should('contain.text', 'Sign In')
       cy.get('.Primary').
       should('contain.text', 'Sign In')
    }

    checkForRegisterBtns() {
        cy.get('[id="MainHeader"]').find('.SignInLinks').
       should('contain.text', 'Register')
       cy.get('.P > .ApplyButton').
       should('contain.text', 'Register')
    }
    
    checkForSearch() {
        cy.get('[id="Form_Search"]').type('drift').get('#Form_Go').click();
        cy.get('[id="Form_Search"]').type('dddd').get('.SiteSearch > #Form_Search1').click().get('.NoResults')
        .should('have.text', 'No results for driftdddd.')
    }

}
export const communityPage = new CommunityPage()