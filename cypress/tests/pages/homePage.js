import userData from "../../fixtures/userData.json";

class HomePage {
  selectorList() {
    return {
      likeButton: "[data-cy='like']",
      hireButton: "[data-cy='money']", // Corrigido 'Buttom' para 'Button'
      emailField: "[data-cy='email']",
      passwordField: "[data-cy='password']",
    };
  }

  tryLikeButton() {
    cy.get(this.selectorList().likeButton).then(($buttons) => {
      const randomIndex = Math.floor(Math.random() * $buttons.length);
      cy.wrap($buttons[randomIndex]).click();
    });

    cy.get("body").then(($body) => {
      if ($body.text().includes("Login")) {
        cy.log("User is logged out");
        cy.contains("You must log in to like.").should("be.visible");
        cy.contains("button", "Ok").should("be.visible").click();
      } else {
        cy.log("User is logged in");
      }
    });
  }

  tryHireHeroButton() {
    cy.get(this.selectorList().hireButton).then(($buttons) => {
      const randomIndex = Math.floor(Math.random() * $buttons.length);
      cy.wrap($buttons[randomIndex]).click();
    });

    cy.get("body").then(($body) => {
      if ($body.text().includes("Login")) {
        cy.log("User is logged out");
        cy.contains("You must log in to hire this hero.").should("be.visible");
        cy.contains("button", "Ok").should("be.visible").click();
      } else {
        cy.log("User is logged in");
      }
    });
  }

  assertModalIsClosed() {
    cy.get(".modal-container").should("not.exist");
  }

  loginWithValidCredentials() {
    cy.contains("button", "Login").should("be.visible").click();
    cy.get(this.selectorList().emailField)
      .click()
      .type(userData.loginSucess.email);
    cy.get(this.selectorList().passwordField)
      .click()
      .type(userData.loginSucess.password);
    cy.contains("button", "Sign in").should("be.visible").click();
    cy.contains("Logout").should("be.visible");
    cy.contains("Create New Hero").should("be.visible");
  }

  loginWithMalformedEmail() {
    cy.contains("button", "Login").should("be.visible").click();
    cy.get(this.selectorList().emailField).click().type("test@123");
    cy.get(this.selectorList().passwordField)
      .click()
      .type(userData.loginSucess.password);
    cy.contains("button", "Sign in").should("be.visible").click();
    cy.contains("Email is not valid").should("be.visible");
  }

  loginWithInvalidEmail() {
    cy.contains("button", "Login").should("be.visible").click();
    cy.get(this.selectorList().emailField)
      .click()
      .type(userData.loginFail.email);
    cy.get(this.selectorList().passwordField)
      .click()
      .type(userData.loginSucess.password);
    cy.contains("button", "Sign in").should("be.visible").click();
    cy.contains("Invalid email or password").should("be.visible");
  }

  loginWithInvalidPassword() {
    cy.contains("button", "Login").should("be.visible").click();
    cy.get(this.selectorList().emailField)
      .click()
      .type(userData.loginSucess.email);
    cy.get(this.selectorList().passwordField)
      .click()
      .type(userData.loginFail.password);
    cy.contains("button", "Sign in").should("be.visible").click();
    cy.contains("Invalid email or password").should("be.visible");
  }

  loginWithoutCredentials() {
    cy.contains("button", "Login").should("be.visible").click();
    cy.contains("button", "Sign in").should("be.visible").click();
    cy.contains("Email is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");
  }
}

export default HomePage;
