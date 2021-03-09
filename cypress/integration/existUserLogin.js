
import { basePage } from "../support/pages/basePage";
import { loginPage} from "../support/pages/loginPage";

it ('login with existing user', () => {
    basePage.open('/login/?redirect_to=https%3A%2F%2Finsider.drift.com%2Flogin%2F')
    loginPage.checkSuccessLogin('cypresstest@cy.test', '1')
})

it ('check the checkbox Remember me unchecked by default', () =>{
    basePage.open('/login/?redirect_to=https%3A%2F%2Finsider.drift.com%2Flogin%2F')
    loginPage.checkRememberMeIsUnchecked();
})

it.only('check Forgot password exist and you can click on it and check negative scenario with non exist user and after with exist user', () => {
    basePage.open('/login/?redirect_to=https%3A%2F%2Finsider.drift.com%2Flogin%2F')
    loginPage.checkRememberPass('a', 'cypresstest@cy.test');
    
})

