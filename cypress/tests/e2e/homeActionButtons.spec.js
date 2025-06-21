import userData from "../../fixtures/userData.json"
import HomePage from "../pages/homePage"

const homePage = new HomePage

describe('Action Buttons Specs', () => {

    it('Try clicking the action buttons without being logged in', () => {
        homePage.acessHomePage()
        homePage.clickLikeButton()
        homePage.notLoggedUser()
        homePage.clickHireButton()
        homePage.notLoggedUser()
        homePage.clickEditButton()
        homePage.clickDeleteButton()
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

    it('Try clicking edit hero buttons while logged in', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        homePage.clickEditButton()
    });

    it('Try clicking delete hero buttons while logged in', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        homePage.clickDeleteButton()
        homePage.clickNoButton()
        homePage.clickDeleteButton()
        homePage.clickYesButton()
    });

})