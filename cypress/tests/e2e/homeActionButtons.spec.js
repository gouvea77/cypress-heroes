import userData from "../../fixtures/userData.json";
import homePage from "../pages/homePage.js";

const HomePage = new homePage();

describe("Logged-out User", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/heroes");
  });

  it("Attempt to Like while logged out", () => {
    HomePage.tryLikeButton();
    HomePage.assertModalIsClosed();
  });

  it("Attempt to hire a Hero while logged out", () => {
    HomePage.tryHireHeroButton();
    HomePage.assertModalIsClosed();
  });
});
