export class LoginPage {

    checkSuccessLogin(userLogin, userPassword) {
        cy.get('[id="user_login"]').type(userLogin)
    .get('[id="user_pass"]').type(userPassword)
    .get('[id="wp-submit"]').click()
    .wait(2000)
    
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
}

export const loginPage = new LoginPage()