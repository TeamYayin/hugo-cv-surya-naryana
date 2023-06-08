describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens the index page", () => {
    cy.get("h1").contains("Suryanarayana");
  });

  it("navigates to the publications page", () => {
    cy.get('a[href="/publications"]').eq(0).click();
    cy.url().should("include", "/publications");
    cy.get("h1").contains("publications");
  });

  it("navigates to the patents page", () => {
    cy.get('a[href="/projects/contributions"]').eq(0).click();
    cy.url().should("include", "/projects/contributions");
    cy.get("h1").contains("PATENTS");
  });
});
