import { basePage } from "../support/pages/basePage";
import {newUserRegistration} from "../support/pages/newUserRegistration";


it ('check the blur if nothing is added on new user registration', () => {

    basePage.open('https://insider.drift.com/register/free/')
    basePage.clickOnCreateNewAccount();
    newUserRegistration.checkBlurOnRegistration();
})
       //checking for messages if empty inputs
it ('check for messages if empty inputs', () => {

    basePage.open('https://insider.drift.com/register/free/')
    basePage.clickOnCreateNewAccount();
    newUserRegistration.checkForMessages();
})

it ('register new user', () => {

    basePage.open('https://insider.drift.com/register/free/')
    newUserRegistration.newUserRegistrationFlow('testFirstName', 'testLastname', 'test@test.com', '1', '1');
    basePage.clickOnCreateNewAccount();

})

it ('check if password is mismatch', () => {
    basePage.open('https://insider.drift.com/register/free/')
    newUserRegistration.newUserRegistrationFlow('testFirstName', 'testLastname', 'test@test.com', '1', '2');
    basePage.clickOnCreateNewAccount();
    cy.get('[name="mepr_user_password_confirm"]').focus().blur();
    cy.get('.mepr-form-has-errors').should('have.text', 'Please fix the errors above')
})
