import userData from "../../fixtures/userData.json";
import homePage from "../pages/homePage.js";
import createHeroPage from "../pages/createHeroPage.js";

const HomePage = new homePage();
const CreateHeroPage = new createHeroPage();

describe("Create a Hero Scenarios", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/heroes");
  });

  it.only("Create a Hero with valid information", () => {
    HomePage.loginWithValidCredentials();
    CreateHeroPage.createHero();
  });
});
