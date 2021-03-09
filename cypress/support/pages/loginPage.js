export class LoginPage {

    checkSuccessLogin(userLogin, userPassword) {
        cy.get('[id="user_login"]').type(userLogin)
    .get('[id="user_pass"]').type(userPassword)
    .get('[id="wp-submit"]').click()
    .wait(2000)
    .get('[id="course-shelf"]').should('be.visible')
    .log()
    }
    checkRememberMeIsUnchecked() {
        cy.get('[id="rememberme"]').should('not.be.checked')
    }
}

export const loginPage = new LoginPage()