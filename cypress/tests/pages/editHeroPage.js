class EditHeroPage {
    selectorList() {
        const selectors = {
            submittButton: "[novalidate=''] .px-4",
            deleteHeroButton: '.bg-red-600',
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
            errorPowerList: ':nth-child(5) > .text-red-500',
            modalMessageOpen: '.modal-container > .open',
            modalYesButton: ".justify-end .bg-red-600",
            modalNoButton: ".justify-end .border",
        }
        return selectors
    }

    fillNameField(name) {
        cy.get(this.selectorList().nameField).clear().type(name)
    }

    nameFieldError() {
        cy.get(this.selectorList().errorNameField).contains("Name is required")
    }

    fillPriceField(price) {
        cy.get(this.selectorList().priceField).clear().type(price)
    }

    priceFieldError() {
        cy.get(this.selectorList().errorPriceField).contains("Price is required")
    }

    fillFansField(fans) {
        cy.get(this.selectorList().fansField).clear().type(fans)
    }

    fansFieldError() {
        cy.get(this.selectorList().errorFansField).contains("Fans is required")
    }

    fillSavesField(saves) {
        cy.get(this.selectorList().savesField).clear().type(saves)
    }

    savesFieldError() {
        cy.get(this.selectorList().errorSavesField).contains("Saves is required")
    }

    selectPower() {
        const randomIndex = chance.integer({ min: 0, max: 8 });

        cy.get(this.selectorList().powerSelectField)
            .find('option')
            .eq(randomIndex)
            .then(option => {
                const value = option.val();
                cy.get(this.selectorList().powerSelectField).select(value);
            });
    }

    powerFieldError() {
        cy.get(this.selectorList().errorPowerList).contains("Powers is required")
    }

    clickSubmitButton() {
        cy.get(this.selectorList().submittButton).click()
    }

    clickDeleteButton() {
        cy.get(this.selectorList().deleteHeroButton).click()
        cy.get(this.selectorList().modalMessageOpen).should('contains.text', 'Delete Hero?')
    }

    clickNoButton() {
        cy.get(this.selectorList().modalNoButton).click()
    }

    clickYesButton() {
        cy.get(this.selectorList().modalYesButton).click()
    }

}

export default EditHeroPage