describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens the index page", () => {
    cy.get("h1").contains("Suryanarayana");
  });
});

describe('patents page', () => {
  it("navigates to the patents page", () => {
    cy.visit("/projects/contributions");
    cy.get("h1").contains("Patents");
  });
})