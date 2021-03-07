
export class NewUserRegistration {

    checkBlurOnRegistration() {
        
        cy.get('[name="user_first_name"').focus().blur();
        cy.get('[name="user_email"').focus().blur();
        cy.get('[name="user_last_name').focus().blur();
        cy.get('[name="mepr_user_password"]').focus().blur();
    }

    checkForMessages() {
        cy.get('.mepr_first_name > .mp-form-label > .cc-error').should('have.text', 'First Name Required');
        cy.get('.mepr_email > .mp-form-label > .cc-error').should('have.text', 'Invalid Email');
        cy.get('.mepr_last_name > .mp-form-label > .cc-error').should('have.text', 'Last Name Required');
        cy.get('.mepr-form-has-errors').should('have.text', 'Please fix the errors above');
    }

    newUserRegistrationFlow(firsttName,lastName,userEmail,userPassword,confirmUserPassword) {
        var timeInMs = Date.now();
        cy.get('[name="user_first_name"').type(firsttName);
        cy.get('[name="user_last_name').type(lastName);
        cy.get('[name="user_email"').type(timeInMs+userEmail);
        cy.get('[name="mepr_user_password"]').type(userPassword);
        cy.get('[name="mepr_user_password_confirm"]').type(confirmUserPassword)
    }
}

export const newUserRegistration = new NewUserRegistration()