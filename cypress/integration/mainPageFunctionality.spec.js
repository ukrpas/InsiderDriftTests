
import { basePage } from "../support/pages/basePage";
import { loginPage} from "../support/pages/loginPage";
import { mainPage } from "../support/pages/mainPage";

describe('Main page functionality - links are working, search etc. ', () => {

    beforeEach(() => {
         cy.clearData();
         basePage.open('/login/?redirect_to=https%3A%2F%2Finsider.drift.com%2Flogin%2F')
    })

it ('check taht links are opening', () => {
    
    loginPage.checkSuccessLogin('cypresstest@cy.test', '1')
    mainPage.checkLinks()
})

it ('check search with exist data', () => {
    
    loginPage.checkSuccessLogin('cypresstest@cy.test', '1')
    mainPage.searchForExistItem('Drift')
})

it ('check search with non exist data', () => {
    
    loginPage.checkSuccessLogin('cypresstest@cy.test', '1')
    mainPage.searchForNonExistItem('zzz')
    
    })
})