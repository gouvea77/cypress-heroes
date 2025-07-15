import userData from "../../fixtures/userData.json"
import EditHeroPage from "../pages/editHeroPage";
import HomePage from "../pages/homePage"

const Chance = require('chance');

const chance = new Chance();
const homePage = new HomePage
const editHeroPage = new EditHeroPage

describe('Edit Hero Specs', () => {

    it('Edit hero with valid inputs', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        homePage.clickEditButton()
        editHeroPage.fillNameField(chance.name())
        editHeroPage.fillPriceField(chance.natural({ min: 0, max: 999 }))
        editHeroPage.fillFansField(chance.natural({ min: 0, max: 999 }))
        editHeroPage.fillSavesField(chance.natural({ min: 0, max: 999 }))
        editHeroPage.selectPower()
        editHeroPage.clickSubmitButton()
    })

    it('Try to Logout from system', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        homePage.clickEditButton()
        homePage.logoutFromSystem()
    })

    it('Try to Delete Hero', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        homePage.clickEditButton()
        editHeroPage.clickDeleteButton()
        editHeroPage.clickNoButton()
        editHeroPage.clickDeleteButton()
        editHeroPage.clickYesButton()
        homePage.verifyHomePage()
    })

    it('Try to edit a hero with invalid name input', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        homePage.clickEditButton()
        editHeroPage.fillNameField(chance.string({ symbols: true, length: 8 }))
        editHeroPage.fillPriceField(chance.natural({ min: 0, max: 999 }))
        editHeroPage.fillFansField(chance.natural({ min: 0, max: 999 }))
        editHeroPage.fillSavesField(chance.natural({ min: 0, max: 999 }))
        editHeroPage.selectPower()
        editHeroPage.clickSubmitButton()
        editHeroPage.nameFieldError()
    })

    it('Try to edit a hero with invalid price input', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        homePage.clickEditButton()
        editHeroPage.fillNameField(chance.name())
        editHeroPage.fillPriceField(chance.integer({ min: -100, max: 0 }))
        editHeroPage.fillFansField(chance.natural({ min: 0, max: 999 }))
        editHeroPage.fillSavesField(chance.natural({ min: 0, max: 999 }))
        editHeroPage.selectPower()
        editHeroPage.clickSubmitButton()
        editHeroPage.priceFieldError()
    })

    it('Try to edit a hero with invalid fans input', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        homePage.clickEditButton()
        editHeroPage.fillNameField(chance.name())
        editHeroPage.fillPriceField(chance.natural({ min: 0, max: 999 }))
        editHeroPage.fillFansField(chance.integer({ min: -100, max: -1 }))
        editHeroPage.fillSavesField(chance.natural({ min: 0, max: 999 }))
        editHeroPage.selectPower()
        editHeroPage.clickSubmitButton()
        editHeroPage.fansFieldError()
    })

    it('Try to edit a hero with invalid saves input', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        homePage.clickEditButton()
        editHeroPage.fillNameField(chance.name())
        editHeroPage.fillPriceField(chance.natural({ min: 0, max: 999 }))
        editHeroPage.fillFansField(chance.natural({ min: 0, max: 999 }))
        editHeroPage.fillSavesField(chance.integer({ min: -100, max: -1 }))
        editHeroPage.selectPower()
        editHeroPage.clickSubmitButton()
        editHeroPage.savesFieldError()
    })
})