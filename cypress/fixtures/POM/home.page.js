class HomePage {
  get RequestRateQuoteBtn() {
    return cy.get(".nav-item.get-a-quote.visible-sm.visible-md.visible-lg", {
      timeout: 10000,
    });
  }
}
export default new HomePage();
