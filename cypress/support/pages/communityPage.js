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

}
export const communityPage = new CommunityPage()