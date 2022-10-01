describe('User Journey', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('a user can find a course on the home page and complete the courses lessons', () => {
    cy.getByData('course-0').find('a').last().click();
    cy.location('pathname').should('eq', '/testing-your-first-application');
    cy.getByData('next-lesson-button').contains('Start Course').click();
    cy.location('pathname').should(
      'eq',
      '/testing-your-first-application/app-install-and-overview'
    );
    cy.getByData('challenge-answer-0').click();
    cy.getByData('next-lesson-button').contains('Next Lesson').click();
    cy.location('pathname').should(
      'eq',
      '/testing-your-first-application/installing-cypress-and-writing-our-first-test'
    );
    cy.getByData('challenge-answer-0').click();
    cy.getByData('next-lesson-button').contains('Next Lesson').click();
    cy.location('pathname').should(
      'eq',
      '/testing-your-first-application/setting-up-data-before-each-test'
    );
    cy.getByData('challenge-answer-0').click();
    cy.getByData('next-lesson-button').contains('Complete Course').click();
    cy.location('pathname').should('eq', '/');
  });
});
