export class BasePage {

      open(url){
        cy.visit(url);
            }
      
      clickOnCreateNewAccount() {
        cy.get('.mepr-submit').click();
      }

}


export const basePage = new BasePage()