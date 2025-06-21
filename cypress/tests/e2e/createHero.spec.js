import userData from "../../fixtures/userData.json"
import CreateHeroPage from "../pages/createHeroPage"
import HomePage from "../pages/homePage"

const Chance = require('chance');

const chance = new Chance();
const homePage = new HomePage
const createHeroPage = new CreateHeroPage

describe('Create Hero Specs', () => {

    it('Create a hero with valid inputs', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        createHeroPage.acessCreateNewHeroPage()
        createHeroPage.fillNameField(chance.name())
        createHeroPage.fillPriceField(chance.natural({ min: 0, max: 999 }))
        createHeroPage.fillFansField(chance.natural({ min: 0, max: 999 }))
        createHeroPage.fillSavesField(chance.natural({ min: 0, max: 999 }))
        createHeroPage.selectPower()
        createHeroPage.clickSubmitButton()
    })

    it('Try to create a hero with empty fields', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        createHeroPage.acessCreateNewHeroPage()
        createHeroPage.clickSubmitButton()
        createHeroPage.nameFieldError()
        createHeroPage.priceFieldError()
        createHeroPage.fansFieldError()
        createHeroPage.savesFieldError()
        createHeroPage.powerFieldError()
    })

    it('Try to create a hero with invalid name input', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        createHeroPage.acessCreateNewHeroPage()
        createHeroPage.fillNameField(chance.string({ symbols: true, length: 8 }))
        createHeroPage.fillPriceField(chance.natural({ min: 0, max: 999 }))
        createHeroPage.fillFansField(chance.natural({ min: 0, max: 999 }))
        createHeroPage.fillSavesField(chance.natural({ min: 0, max: 999 }))
        createHeroPage.selectPower()
        createHeroPage.clickSubmitButton()
        createHeroPage.nameFieldError()
    })

    it('Try to create a hero with invalid price input', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        createHeroPage.acessCreateNewHeroPage()
        createHeroPage.fillNameField(chance.name())
        createHeroPage.fillPriceField(chance.integer({ min: -100, max: 0 }))
        createHeroPage.fillFansField(chance.natural({ min: 0, max: 999 }))
        createHeroPage.fillSavesField(chance.natural({ min: 0, max: 999 }))
        createHeroPage.selectPower()
        createHeroPage.clickSubmitButton()
        createHeroPage.priceFieldError()
    })

    it('Try to create a hero with invalid fans input', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        createHeroPage.acessCreateNewHeroPage()
        createHeroPage.fillNameField(chance.name())
        createHeroPage.fillPriceField(chance.natural({ min: 0, max: 999 }))
        createHeroPage.fillFansField(chance.integer({ min: -100, max: -1 }))
        createHeroPage.fillSavesField(chance.natural({ min: 0, max: 999 }))
        createHeroPage.selectPower()
        createHeroPage.clickSubmitButton()
        createHeroPage.fansFieldError()
    })

    it('Try to create a hero with invalid saves input', () => {
        homePage.acessHomePage()
        homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
        createHeroPage.acessCreateNewHeroPage()
        createHeroPage.fillNameField(chance.name())
        createHeroPage.fillPriceField(chance.natural({ min: 0, max: 999 }))
        createHeroPage.fillFansField(chance.natural({ min: 0, max: 999 }))
        createHeroPage.fillSavesField(chance.integer({ min: -100, max: -1 }))
        createHeroPage.selectPower()
        createHeroPage.clickSubmitButton()
        createHeroPage.savesFieldError()
    })

})