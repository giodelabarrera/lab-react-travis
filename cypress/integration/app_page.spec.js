describe("App Page", function() {
  it("successfully loads", function() {
    // eslint-disable-next-line no-undef
    cy.visit("/"); // change URL to match your dev URL
    expect(true).to.equal(true)
  });
});
