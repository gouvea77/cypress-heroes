import Chance from 'chance';
import EditHeroPage from './editHeroPage';

const chance = new Chance();
const editHeroPage = new EditHeroPage;

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
            modalOkButton: ".justify-end .border",
            editButton: "[data-cy='pencil']",
            deleteButton: "[data-cy='trash']"
        }
        return selectors
    }

    acessHomePage() {
        cy.visit('http://localhost:3000/').contains('Login')
    }

    verifyHomePage() {
        cy.url().should('eq', 'http://localhost:3000/heroes')
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

    notLoggedUser() {
        cy.get(this.selectorList().modalMessageOpen).should('be.visible').contains("Ok")
        cy.get(this.selectorList().modalOkButton).click()
    }

    clickLikeButton() {
        const clickRandomLikeButton = () => {
            cy.get(this.selectorList().likeButton).then(($buttons) => {
                const total = $buttons.length;

                if (total > 0) {
                    const randomIndex = chance.integer({ min: 0, max: total - 1 });
                    cy.wrap($buttons[randomIndex]).click();
                } else {
                    cy.log('No like buttons found on the page.');
                }
            });
        };

        cy.get('body').then(($body) => {
            if ($body.text().includes('Login')) {
                cy.log('User not logged in');
                clickRandomLikeButton();
                cy.get(this.selectorList().modalMessageOpen)
                    .should('contain.text', 'You must log in to like.');
            } else if ($body.text().includes('Logout')) {
                cy.log('User logged in');
                clickRandomLikeButton();
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
                cy.log('No hire buttons found on the page.');
            }
        });

        cy.get('body').then(($body) => {

            if ($body.text().includes('Login')) {
                cy.log('User not logged in')
                cy.get(this.selectorList().modalMessageOpen)
                    .should('contain.text', 'You must log in to hire this hero.');
            } else if ($body.text().includes('Logout')) {
                cy.log('User logged in')
                cy.get(this.selectorList().modalMessageOpen)
                    .should('contain.text', 'Hire Hero?');
            }
        });
    }

    clickEditButton() {
        cy.get('body').then(($body) => {
            if ($body.text().includes('Login')) {
                cy.log('User not logged in');
                cy.get(this.selectorList().editButton).should('not.exist');
                cy.log("Edit Button don't exist");

            } else if ($body.text().includes('Logout')) {
                cy.log('User logged in');
                cy.get(this.selectorList().editButton).should('exist');
                cy.get(this.selectorList().editButton).then(($buttons) => {
                    const total = $buttons.length;

                    if (total > 0) {
                        const randomIndex = chance.integer({ min: 0, max: total - 1 });
                        cy.wrap($buttons[randomIndex]).click();
                        cy.get(editHeroPage.selectorList().deleteHeroButton).should('contains.text', 'Delete Hero')
                    } else {
                        cy.log('No hire buttons found on the page.');
                    }
                });
            }
        });
    }

    clickDeleteButton() {
        cy.get('body').then(($body) => {
            if ($body.text().includes('Login')) {
                cy.log('User not logged in');
                cy.get(this.selectorList().deleteButton).should('not.exist');
                cy.log("Delete Button don't exist");

            } else if ($body.text().includes('Logout')) {
                cy.log('User logged in');
                cy.get(this.selectorList().deleteButton).should('exist')
                cy.get(this.selectorList().deleteButton).then(($buttons) => {
                    const total = $buttons.length;

                    if (total > 0) {
                        const randomIndex = chance.integer({ min: 0, max: total - 1 });
                        cy.wrap($buttons[randomIndex]).click();
                    } else {
                        cy.log('No hire buttons found on the page.');
                    }
                });;
            }
        });
    }

    clickNoButton() {
        cy.get(this.selectorList().modalNoButton).click()
    }

    clickYesButton() {
        cy.get(this.selectorList().modalYesButton).click()
    }
}

export default HomePage