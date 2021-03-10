
import { basePage } from "../support/pages/basePage";
import { loginPage} from "../support/pages/loginPage";
import { mainPage } from "../support/pages/mainPage";

it.skip ('check taht links are opening', () => {
    basePage.open('/login/?redirect_to=https%3A%2F%2Finsider.drift.com%2Flogin%2F')
    loginPage.checkSuccessLogin('cypresstest@cy.test', '1')
    mainPage.checkLinks()
})
it ('check search with exist data', () => {
    basePage.open('/login/?redirect_to=https%3A%2F%2Finsider.drift.com%2Flogin%2F')
    loginPage.checkSuccessLogin('cypresstest@cy.test', '1')
    mainPage.searchForExistItem('Drift')
})
it ('check search with non exist data', () => {
    basePage.open('/login/?redirect_to=https%3A%2F%2Finsider.drift.com%2Flogin%2F')
    loginPage.checkSuccessLogin('cypresstest@cy.test', '1')
    mainPage.searchForNonExistItem('zzz')
})