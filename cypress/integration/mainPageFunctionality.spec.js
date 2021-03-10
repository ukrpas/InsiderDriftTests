/// <reference types="cypress" />
import { basePage } from "../support/pages/basePage";
import { loginPage} from "../support/pages/loginPage";

it ('check taht links are opening', () => {
    basePage.open('/login/?redirect_to=https%3A%2F%2Finsider.drift.com%2Flogin%2F')
    loginPage.checkSuccessLogin('cypresstest@cy.test', '1')
    cy.get('#masthead').find('#primary-menu').find('li').eq(2).click()
    
})