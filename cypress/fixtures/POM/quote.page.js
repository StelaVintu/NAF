class QuotePage {
  get buyAhomeBtn() {
    return cy.get(".squarebtn.purch.pickPurch.criteoPurch.SendGAEventTrue");
  }
  get singleFamHomeBtn() {
    return cy.get('[value="Single Family Home"]');
  }
  get primaryResidenceBtn() {
    return cy.get('[value="Primary Residence"]');
  }
  get yesBtn() {
    return cy.contains("Yes");
  }
  get inTheNextFewMonthsBtn() {
    return cy.get('[value="In the next few months"]');
  }
  get stateDropDownMenu() {
    return cy.get('[name="PuState"]');
  }
  get estimatedPurchasePriceInput() {
    return cy.get('[inputmode="numeric"]');
  }
  get nextBtn() {
    return cy.contains("Next");
  }
  get estimatedDownPaymentInput() {
    return cy.get('[class="a-question dp"]');
  }
  get employedBtn() {
    return cy.get('[value="Employed"]');
  }
  get income100kBtn() {
    return cy.get('[value="$50,000 - $100,000"]');
  }
  get noBtn() {
    return cy.contains("No");
  }
  get noneBtn() {
    return cy.get('[value="None"]');
  }
  get confirmationBtn() {
    return cy.get('[value="true"]');
  }
  get excellentCreditScoreBtn() {
    return cy.get('[value="Excellent (720+)"]');
  }
  get firstNameInput() {
    return cy.get('[id="PuFirstName"]');
  }
  get lastNameInput() {
    return cy.get('[id="PuLastName"]');
  }
  get emailInput() {
    return cy.get('[type="email"]');
  }
  get phoneNumberInput() {
    return cy.get("#PuPhone");
  }

  enterPropertyInfo(state) {
    this.singleFamHomeBtn.click();
    this.primaryResidenceBtn.click();
    this.yesBtn.click();
    this.inTheNextFewMonthsBtn.click();
    this.stateDropDownMenu.select(state);
  }

  enterLoanDetails(estimatedPrice, downPayment) {
    this.estimatedPurchasePriceInput.clear().type(estimatedPrice);
    this.nextBtn.click({ force: true });
    this.estimatedDownPaymentInput.last().type(downPayment);
    this.nextBtn.click({ force: true });
  }
  enterEmploymentAndIncomeDetails() {
    this.employedBtn.click();
    this.income100kBtn.click();
    this.yesBtn.click({ force: true });
    this.noBtn.click({ force: true });
    this.noBtn.click({ force: true });
    this.noBtn.click({ force: true });
    this.noneBtn.click();
    this.confirmationBtn.click();
    this.excellentCreditScoreBtn.click();
  }

  enterPersonalContactInfo(firstName, lastName, email, phoneNumber) {
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.emailInput.type(email);
    this.phoneNumberInput.type(phoneNumber);
    //commenting out not to spam the team:
    //this.nextBtn.click({ force: true });
  }
}
export default new QuotePage();
