export class BasePage {

      open(url){
        cy.visit(Cypress.config().baseUrl + url);
            }
      
      clickOnCreateNewAccount() {
        cy.get('.mepr-submit').click();
      }

      visitCommunityPage() {
        cy.visit(Cypress.config().communityURL)
      }

}


export const basePage = new BasePage()