import { userSelectors, checkoutSelectors } from "../types/types.js";
import type { userData, userCheckoutData } from "../types/types.js";

export async function fillingData(data: userData, fields: (keyof userData)[]) {
  fields.forEach((field) => {
    const selector = userSelectors[field];
    cy.get(selector).type(data[field]!);
  });
}

export function loginEnter() {
  cy.get("#login-button").click();
  cy.url().should("include", "https://www.saucedemo.com/inventory.html");

  cy.get('span.title[data-test="title"]')
    .should("be.visible")
    .and("have.text", "Products");
  cy.get(".inventory_container").should("be.visible");
}

export function selectHigherSorting() {
  cy.get('select[data-test="product-sort-container"]').select(
    "Price (low to high)"
  );
}

export function verifyProductsSortedByLower() {
  cy.get('[data-test="inventory-item-price"]').then((prices) => {
    const priceNumbers = prices
      .toArray()
      .map((el) => parseFloat(el.innerText.replace("$", "")));
    for (let i = 0; i < priceNumbers.length - 1; i++) {
      cy.wrap(priceNumbers[i]).should("be.lte", priceNumbers[i + 1]);
    }
  });
}

export async function chooseAboutInBurger() {
  cy.get("#react-burger-menu-btn").click();
  cy.get(".bm-menu-wrap").should("be.visible");

  cy.get("#about_sidebar_link")
    .invoke("attr", "href")
    .then((href) => {
      expect(href).to.not.be.null;
      expect(href).to.include("saucelabs.com");
      cy.request(href as string)
        .its("status")
        .should("eq", 200);
    });
}

export function addAndRemoveItem() {
  const itemButton = () => cy.get('button[data-test*="sauce-labs-backpack"]');
  const cartBadge = () => cy.get(".shopping_cart_badge");

  itemButton().should("have.text", "Add to cart");
  itemButton().click();
  cartBadge().should("have.text", "1");
  itemButton().should("have.text", "Remove");

  itemButton().click();
  cartBadge().should("not.exist");
  itemButton().should("have.text", "Add to cart");
}

export async function openCheckoutForm() {
  const cartLocator = () => cy.get("#shopping_cart_container");
  const checkBtn = () => cy.get("#checkout");

  cartLocator().click();
  cy.url().should("eq", "https://www.saucedemo.com/cart.html");

  checkBtn().click();
  cy.url().should("eq", "https://www.saucedemo.com/checkout-step-one.html");
}

export async function fillingInCheckoutData(
  data: userCheckoutData,
  fields: (keyof userCheckoutData)[]
) {
  for (const field of fields) {
    const selector = checkoutSelectors[field];
    const value = data[field];

    if (selector) {
      const stringValue = String(value);
      cy.get(selector).type(stringValue);
      cy.get(selector).should("have.value", stringValue);
    }
  }
}
