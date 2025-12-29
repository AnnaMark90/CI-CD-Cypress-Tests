import {
  fillingData,
  loginEnter,
  selectHigherSorting,
  verifyProductsSortedByLower,
  chooseAboutInBurger,
  addAndRemoveItem,
  openCheckoutForm,
  fillingInCheckoutData,
} from "../helpers/helpers.js";
import { checkoutData, problemUser } from "../types/types.js";

describe("finding bugs on platfoorm", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
    fillingData(problemUser, ["username", "password"]);
    loginEnter();
  });

  it("display products from low", () => {
    selectHigherSorting();
    verifyProductsSortedByLower();
  });

  it("transition to about page", () => {
    chooseAboutInBurger();
  });

  it("removing product from a cart", () => {
    addAndRemoveItem();
  });

  it("filling in data to checkout", () => {
    openCheckoutForm();
    fillingInCheckoutData(checkoutData, ["firstname", "lastname", "postcode"]);
  });
});
