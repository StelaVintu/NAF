import faker from "faker";
import HomePage from "../fixtures/POM/home.page";
import QuotePage from "../fixtures/POM/quote.page";

const userData = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.phoneNumberFormat(),
};

let loanData;

describe("Rate Quote", () => {
  before("", () => {
    cy.fixture("data.json").then((data) => {
      loanData = data;
    });
  });
  beforeEach(() => {
    cy.visit("");
  });

  it("Should be able to request rate quote", () => {
    HomePage.RequestRateQuoteBtn.click();
    QuotePage.buyAhomeBtn.click();
    QuotePage.enterPropertyInfo(loanData.state);
    QuotePage.enterLoanDetails(loanData.estimatedPrice, loanData.downPayment);
    QuotePage.enterEmploymentAndIncomeDetails();
    QuotePage.enterPersonalContactInfo(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.phoneNumber
    );
    //cy.get('.pt-completion').should('contain.text', 'COMPLETED: 100%')
  });
});