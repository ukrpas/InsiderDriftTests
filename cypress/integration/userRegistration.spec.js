import { basePage } from "../support/pages/basePage";
import {newUserRegistration} from "../support/pages/newUserRegistration";

describe('new user registration', () => {

    beforeEach(() => {
         cy.clearData();
         basePage.open('register/free/')
    })

it ('check the blur if nothing is added on new user registration', () => {

    basePage.clickOnCreateNewAccount();
    newUserRegistration.checkBlurOnRegistration();
})
       //checking for messages if empty inputs
it ('check for messages if empty inputs', () => {
    
    basePage.clickOnCreateNewAccount();
    newUserRegistration.checkForMessages();
})

it ('register new user', () => {
<<<<<<< HEAD

    basePage.open('register/free/')
    newUserRegistration.newUserRegistrationFlow('testFirstName', 'testLastName', 'test@test.com', '1', '1');
=======
   
    newUserRegistration.newUserRegistrationFlow('testFirstName', 'testLastname', 'test@test.com', '1', '1');
>>>>>>> communityDrift
    basePage.clickOnCreateNewAccount();

})

it ('check for Error message if password is mismatch and confirm password input has blur', () => {
   
    newUserRegistration.newUserRegistrationFlow('testFirstName', 'testLastname', 'test@test.com', '1', '2');
    basePage.clickOnCreateNewAccount();
    newUserRegistration.checkForMismatchPass()
 
    })
})
