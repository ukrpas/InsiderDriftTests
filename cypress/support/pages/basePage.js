export class BasePage {

      open(url){
        cy.visit(Cypress.config().baseUrl + url);
            }
      
      clickOnCreateNewAccount() {
        cy.get('.mepr-submit').click();
      }

}


export const basePage = new BasePage()