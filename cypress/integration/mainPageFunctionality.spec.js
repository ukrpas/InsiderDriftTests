/// <reference types="cypress" />
import { basePage } from "../support/pages/basePage";
import { loginPage} from "../support/pages/loginPage";

it ('check taht links are opening', () => {
    basePage.open('/login/?redirect_to=https%3A%2F%2Finsider.drift.com%2Flogin%2F')
    loginPage.checkSuccessLogin('cypresstest@cy.test', '1')
    cy.get('#masthead').find('#primary-menu').find('li').eq(4).click()
    cy.get('.search-field').focus().type('Drift').click()
    cy.get('#masthead').find('#primary-menu').find('li').eq(3).click()
    cy.url().should('include', '/resources/') 
    cy.get('#masthead').find('#primary-menu').find('li').eq(2).click()
    cy.url().should('include', '/certifications/')
    cy.get('#masthead').find('#primary-menu').find('li').eq(1).click()
    cy.url().should('include', '/classes/') 
    cy.get('#masthead').find('#primary-menu').find('li').eq(0).click()
    cy.url().should('eq', 'https://community.drift.com/') 
})