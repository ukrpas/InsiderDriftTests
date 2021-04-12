import {communityPage} from "..//support/pages/communityPage"
import { basePage } from "../support/pages/basePage";

describe ('Check community page functionality', () => {
    beforeEach(() => {
        cy.clearData();
        basePage.visitCommunityPage();
})
it ('Sign in buttons are exist', () => {
    
    
    communityPage.checkForSignInBtns();

})

it ('Register buttons are exist', () => {
    communityPage.checkForRegisterBtns();
})

})