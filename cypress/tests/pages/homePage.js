class HomePage {
    selectorList() {
        const selectors = {
            loginButton: 'li > .undefined',
            emailField: '[data-cy="email"]',
            passwordField: '[data-cy="password"]',
            signInButton: "[novalidate=''] .text-white",
            errorMessageLogin: '.text-red-500',
            logoutButton: 'nav > .flex > :nth-child(2) > .undefined'
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
}

export default HomePage