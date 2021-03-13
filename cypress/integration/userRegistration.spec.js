import { basePage } from "../support/pages/basePage";
import {newUserRegistration} from "../support/pages/newUserRegistration";

describe('new user registration', () => {

    beforeEach(() => {
         cy.clearData();
    })

it ('check the blur if nothing is added on new user registration', () => {

    basePage.open('register/free/')
    basePage.clickOnCreateNewAccount();
    newUserRegistration.checkBlurOnRegistration();
})
       //checking for messages if empty inputs
it ('check for messages if empty inputs', () => {

    basePage.open('register/free/')
    basePage.clickOnCreateNewAccount();
    newUserRegistration.checkForMessages();
})

it ('register new user', () => {

    basePage.open('register/free/')
    newUserRegistration.newUserRegistrationFlow('testFirstName', 'testLastname', 'test@test.com', '1', '1');
    basePage.clickOnCreateNewAccount();

})

it ('check for Error message if password is mismatch and confirm password input has blur', () => {
    basePage.open('register/free/')
    newUserRegistration.newUserRegistrationFlow('testFirstName', 'testLastname', 'test@test.com', '1', '2');
    basePage.clickOnCreateNewAccount();
    newUserRegistration.checkForMismatchPass()
 
    })
})
