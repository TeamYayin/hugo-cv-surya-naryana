describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens the index page", () => {
    cy.get("h1").contains("Suryanarayana");
  });

  it("navigates to the publications page", () => {
    cy.get('a[href="https://g-suryanarayana.in/publications/"]').eq(0).click();
    cy.url().should("include", "/publications");
    cy.get("h1").contains("publications");
  });
});

describe('patents page', () => {
  it("navigates to the patents page", () => {
    cy.visit("/projects/contributions");
    cy.get("h1").contains("PATENTS");
  });
})