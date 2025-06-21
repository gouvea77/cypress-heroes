import Chance from 'chance';

const chance = new Chance();

class HomePage {
    selectorList() {
        const selectors = {
            loginButton: 'li > .undefined',
            emailField: '[data-cy="email"]',
            passwordField: '[data-cy="password"]',
            signInButton: "[novalidate=''] .text-white",
            errorMessageLogin: '.text-red-500',
            logoutButton: 'nav > .flex > :nth-child(2) > .undefined',
            likeButton: "[data-cy='like']",
            saveButton: "[data-cy='money']",
            modalMessageOpen: '.modal-container > .open',
            modalYesButton: ".justify-end .bg-red-600",
            modalNoButton: ".justify-end .border",
            editButton: "[data-cy='pencil']",
            deleteButton: "[data-cy='trash']"
        }
        return selectors
    }

    acessHomePage() {
        cy.visit('http://localhost:3000/').contains('Login')
    }

    loginWithValidUser(email, password) {
        cy.get(this.selectorList().loginButton).click()
        cy.get(this.selectorList().emailField).type(email)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().signInButton).click()
        cy.get('body').contains("Logout")
    }

    loginWithInvalidUser(email, password) {
        cy.get(this.selectorList().loginButton).click()
        cy.get(this.selectorList().emailField).type(email)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().signInButton).click()
        cy.get(this.selectorList().errorMessageLogin).contains("Invalid email or password")
    }

    logoutFromSystem() {
        cy.get('body').contains("Logout")
        cy.get(this.selectorList().logoutButton).click()
        cy.get('body').contains("Login")
    }

    clickLikeButton() {
        cy.get(this.selectorList().likeButton).then(($buttons) => {
            const total = $buttons.length;

            if (total > 0) {
                const randomIndex = chance.integer({ min: 0, max: total - 1 });
                cy.wrap($buttons[randomIndex]).click();
            } else {
                cy.log('No like buttons found on the page.');
            }
        });
    }

    clickHireButton() {
        cy.get(this.selectorList().saveButton).then(($buttons) => {
            const total = $buttons.length;

            if (total > 0) {
                const randomIndex = chance.integer({ min: 0, max: total - 1 });
                cy.wrap($buttons[randomIndex]).click();
            } else {
                cy.log('No like buttons found on the page.');
            }
        });
        cy.get(this.selectorList().modalMessageOpen).contains("Hire Hero?")
    }

    clickEditButton() {

    }

    clickDeleteButton() {

    }

    clickNoButton() {
        cy.get(this.selectorList().modalNoButton).click()
    }

    clickYesButton() {
        cy.get(this.selectorList().modalYesButton).click()
    }
}

export default HomePage