
export class LoginPage {

    checkSuccessLogin(userLogin, userPassword) {
        cy.get('[id="user_login"]').type(userLogin)
        .get('[id="user_pass"]').type(userPassword)
        .get('[id="wp-submit"]').click()
        
    }
    checkRememberMeIsUnchecked() {
        cy.get('[id="rememberme"]').should('not.be.checked')
    }
    checkRememberPass(nonExistUser, existUser) {
        cy.contains('Forgot Password').click()
        .wait(2000)
        .get('[id="mepr_user_or_email"]').type(nonExistUser)
        .get('[id="wp-submit"]').click()
        .get('[id="mepr_jump"]').find('ul').find('li').contains('ERROR')
        .wait(2000)
        .get('[id="mepr_user_or_email"]').clear()
        .get('[id="mepr_user_or_email"]').type(existUser)
        .get('[id="wp-submit"]').click()
        .get('.uppercase').contains('Log In')

    }
    checkDataAfterLogin(userFirstName, userLastName, userEmail) {
        cy.get('[id="user_first_name"]').should('have.value', userFirstName)
        .get('[id="user_last_name"]').should('have.value', userLastName)
        .get('[id="user_email"]').should('have.value', userEmail)
    }
    checkIsSubscribtionIsActive() {
        cy.contains('Yes').should('be.visible')
    }
    checkIsUserHaveInvoice() {
        cy.get('[data-label="Invoice"]').should('have.text', 'mp-txn-6047c19652dab')
    }
}

export const loginPage = new LoginPage()