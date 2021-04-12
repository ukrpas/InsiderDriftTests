/// <reference types="cypress" />
export class CommunityPage {


    checkSignIn() {

       cy.get('[id="MainHeader"]').find('.SignInLinks').
       should('contain.text', 'Sign In')
       cy.get('.Primary').
       should('contain.text', 'Sign In')
    }

}
export const communityPage = new CommunityPage()