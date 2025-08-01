import userData from "../../fixtures/userData.json";
import homePage from "../pages/homePage.js";

const HomePage = new homePage();

describe("Login Scenarios", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/heroes");
  });

  it("Login with Valid User and Password", () => {
    HomePage.loginWithValidCredentials();
  });

  it("Error when trying to log in with unregistered email", () => {
    HomePage.loginWithValidCredentials();
  });

  it("Error when trying to log in with a Malformed Email", () => {
    HomePage.loginWithMalformedEmail();
  });

  it("Error when trying to log in without filling username and password", () => {
    HomePage.loginWithoutCredentials();
  });

  it("Error when trying to log in with registered user and invalid password", () => {
    HomePage.loginWithInvalidPassword();
  });
});
