import { basePage } from "../support/pages/basePage";
import { loginPage} from "../support/pages/loginPage";

describe('Login with existing user', () => {

    beforeEach(() => {
             cy.clearData();
             basePage.open('/login/?redirect_to=https%3A%2F%2Finsider.drift.com%2Flogin%2F')
    })
        

it ('login with existing user', () => {
    
    loginPage.checkSuccessLogin('cypresstest@cy.test', '1')
})

it ('check the checkbox Remember me unchecked by default', () =>{
     // basePage.open('/login/?redirect_to=https%3A%2F%2Finsider.drift.com%2Flogin%2F')
    loginPage.checkRememberMeIsUnchecked();
})

it ('check Forgot password exist and you can click on it and check negative scenario with non exist user and after with exist user', () => {
   // basePage.open('/login/?redirect_to=https%3A%2F%2Finsider.drift.com%2Flogin%2F')
    loginPage.checkRememberPass('a', 'cypresstest@cy.test');
})

it ('check links after login', () => {
    basePage.open('/login/?redirect_to=https%3A%2F%2Finsider.drift.com%2Flogin%2F')
    loginPage.checkSuccessLogin('cypresstest@cy.test', '1')
    basePage.open('/account/?action=home')
    loginPage.checkDataAfterLogin('cypresstest', 'cypresstest', 'cypresstest@cy.test')
    basePage.open('/account/?action=subscriptions')
    loginPage.checkIsSubscribtionIsActive();
    basePage.open('/account/?action=payments')
    loginPage.checkIsUserHaveInvoice()
    
    })
 })