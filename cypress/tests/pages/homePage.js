class HomePage {
    selectorList() {
        const selectors = {
            loginButton: 'li > .undefined',
            emailField: '[data-cy="email"]',
            passwordField: '[data-cy="password"]',
            signInButton: "[novalidate=''] .text-white",
            errorMessageLogin: '.text-red-500'
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
}

export default HomePage