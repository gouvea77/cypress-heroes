class CreateHeroPage {
    selectorList() {
        const selectors = {
            createNewHeroButton: 'a > .undefined',
            submittButton: "[novalidate=''] .px-4",
            nameField: '[data-cy="nameInput"]',
            priceField: '[data-cy="priceInput"]',
            fansField: '[data-cy="fansInput"]',
            savesField: '[data-cy="savesInput"]',
            powerSelectField: "[data-cy='powersSelect']",
            avatarField: '[data-cy="avatarFile"]',
            errorNameField: ':nth-child(1) > .text-red-500',
            errorPriceField: ':nth-child(2) > .text-red-500',
            errorFansField: ':nth-child(3) > .text-red-500',
            errorSavesField: ':nth-child(4) > .text-red-500',
            errorPowerList: ':nth-child(5) > .text-red-500'
        }
        return selectors
    }

    acessCreateNewHeroPage() {
        cy.get(this.selectorList().createNewHeroButton).click()
        cy.get(this.selectorList().submittButton).contains("Submit")
    }


    fillNameField(name) {
        cy.get(this.selectorList().nameField).type(name)
    }

    nameFieldError() {
        cy.get(this.selectorList().errorNameField).contains("Name is required")
    }

    fillPriceField(price) {
        cy.get(this.selectorList().priceField).type(price)
    }

    priceFieldError() {
        cy.get(this.selectorList().errorPriceField).contains("Price is required")
    }

    fillFansField(fans) {
        cy.get(this.selectorList().fansField).type(fans)
    }

    fansFieldError() {
        cy.get(this.selectorList().errorFansField).contains("Fans is required")
    }

    fillSavesField(saves) {
        cy.get(this.selectorList().savesField).type(saves)
    }

    savesFieldError() {
        cy.get(this.selectorList().errorSavesField).contains("Saves is required")
    }

    selectPower() {
        const randomIndex = chance.integer({ min: 0, max: 8 }); // Total de opções visíveis

        cy.get(this.selectorList().powerSelectField)    // seleciona o <select>
            .find('option')                               // busca todas <option>
            .eq(randomIndex)                              // pega uma aleatória
            .then(option => {
                const value = option.val();                 // pega o valor da opção
                cy.get(this.selectorList().powerSelectField).select(value); // seleciona a opção
            });
    }

    powerFieldError() {
        cy.get(this.selectorList().errorPowerList).contains("Powers is required")
    }

    clickSubmitButton() {
        cy.get(this.selectorList().submittButton).click()
    }

}

export default CreateHeroPage