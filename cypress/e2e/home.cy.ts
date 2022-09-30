describe('home page', () => {
  // beforeEach hook was useful if we were doing it.only
  // if the block in which we do it.only doesn't contains cy.visit the elements can't be queried from dom
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('h1 contains the correct text', () => {
    // it is a best practice to access elements by data-attributes
    // accessing by classes and ids (which are primarily used for styling/css and scripts/js)
    // is not good as they can change and tests can fail

    // we can use inspector to get element selector
    cy.get('[data-test="hero-heading"]')
      .should('exist')
      .contains('Testing Next.js Applications with Cypress');
  });

  it('features on the homepage are correct', () => {
    // we can view console after clicking get dt in interface
    // to see the below input (the dom elements selected)
    /*
      Command:   get
      Yielded:   Array(3)
      Elements:  3
      Selector:  dt
    */
    cy.get('dt').eq(0).contains('4 Courses');
    cy.get('dt').eq(1).contains('25+ Lessons');
    cy.get('dt').eq(2).contains('Free and Open Source');
  });
});

export {};
