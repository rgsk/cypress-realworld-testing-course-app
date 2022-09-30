/// <reference types="cypress" />

//@ts-ignore
declare namespace Cypress {
  interface Chainable {
    getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
  }
}
