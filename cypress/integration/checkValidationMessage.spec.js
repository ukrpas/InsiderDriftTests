import { basePage } from "../support/pages/basePage";
import {newUserRegistration} from "../support/pages/newUserRegistration";

it ('check the messages if nothing is added on new user registration', () => {

    basePage.open('https://insider.drift.com/register/free/')

    cy.get('.mepr-submit').click();
    newUserRegistration.checkBlurOnRegistration();
   
    //checking for messages if empty inputs

    newUserRegistration.checkForMessages();

   })