export class MainPage {

checkLinks() {
    cy.get('#masthead').find('#primary-menu').find('li').eq(3).click()
    .url().should('include', '/resources/') 
    .get('#masthead').find('#primary-menu').find('li').eq(2).click()
    .url().should('include', '/certifications/')
    .get('#masthead').find('#primary-menu').find('li').eq(1).click()
    .url().should('include', '/classes/') 
    .get('#masthead').find('#primary-menu').find('li').eq(0).click()
    .url().should('eq', 'https://community.drift.com/') 
}
searchForExistItem(existitem) {
    cy.get('#masthead').find('#primary-menu').find('li').eq(4).click()
    cy.get('.search-field').focus().type('Drift').click()
    cy.url().should('include', '/?s=drift')
}

}

export const mainPage = new MainPage()