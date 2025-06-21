import userData from "../../fixtures/userData.json"
import HomePage from "../pages/homePage"

const homePage = new HomePage

describe('Action Buttons Specs', () => {
    it('Verify if edit and delete action buttons is displayed without being logged in', () => {
        homePage.acessHomePage()
    });

    it('Try clicking the action buttons without being logged in', () => {
        homePage.acessHomePage()
    });

    it('Try clicking like buttons while logged in', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        homePage.clickLikeButton()
    });

    it('Try clicking hire buttons and test hire or not while logged in', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        homePage.clickHireButton()
        homePage.clickNoButton()
        homePage.clickHireButton()
        homePage.clickYesButton()
    });



})