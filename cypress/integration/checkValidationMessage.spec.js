import { basePage } from "../support/pages/basePage";
import {newUserRegistration} from "../support/pages/newUserRegistration";

beforeEach('setup success response', () => {
    cy.intercept('https://metrics.api.drift.com/monitoring/metrics/widget/init/v2', {fixture: 'successRegistration.json'})
    
})

it ('check the blur if nothing is added on new user registration', () => {

    basePage.open('https://insider.drift.com/register/free/')

    cy.get('.mepr-submit').click();
    newUserRegistration.checkBlurOnRegistration();

})
   
    //checking for messages if empty inputs
it ('check for messages if empty inputs', () => {

    newUserRegistration.checkForMessages();

})

it.only ('register new user', () => {
    basePage.open('https://insider.drift.com/register/free/')
    cy.get('[name="user_first_name"').type('testFirstName');
    cy.get('[name="user_email"').type('test@test.com');
    cy.get('[name="user_last_name').type('testLastName');
    cy.get('[name="mepr_user_password"]').type('1');
    cy.get('[name="mepr_user_password_confirm"]').type('1')
    cy.get('.mepr-submit').click();


   })