class CreateHeroPage {
  selectorList() {
    const selectors = {
      nameInput: '[data-cy="nameInput"]',
      priceInput: '[data-cy="priceInput"]',
      fansInput: '[data-cy="fansInput"]',
      savesInput: '[data-cy="savesInput"]',
    };
    return selectors;
  }

  createHero() {
    cy.contains("Create New Hero").should("be.visible").click();
    cy.get(this.selectorList().nameInput).click().type("The Flash");
    cy.get(this.selectorList().priceInput).click().type("1000");
    cy.get(this.selectorList().fansInput).click().type("100");
    cy.get(this.selectorList().savesInput).click().type("100");
    cy.contains("Flying").should("be.visible").click();
  }
}

export default CreateHeroPage;
