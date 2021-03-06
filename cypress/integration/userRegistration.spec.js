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

it.only ('register new user', () => {
    basePage.open('https://insider.drift.com/register/free/')
    newUserRegistration.newUserRegistrationFlow();
    cy.wait(2000)
    basePage.clickOnCreateNewAccount();

})