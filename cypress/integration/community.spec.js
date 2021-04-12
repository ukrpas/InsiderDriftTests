import {communityPage} from "..//support/pages/communityPage"
import { basePage } from "../support/pages/basePage";

describe ('Check community page functionality', () => {
    beforeEach(() => {
        cy.clearData();
})
it ('Sign in buttons are exist', () => {
    
    basePage.visitCommunityPage();
    communityPage.checkSignIn();

})

})