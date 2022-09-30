describe('Newsletter Subscribe Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  const submitEmail = (emailToType: string) => {
    cy.getByData('email-input').type(emailToType);
    cy.getByData('submit-button').click();
  };

  it('allow users to subscribe to the email list', () => {
    const emailToType = 'rahul.gupta@growthschool.io';
    submitEmail(emailToType);
    cy.getByData('success-message')
      .should('exist')
      .contains(`Success: ${emailToType} has been successfully subscribed`);
  });

  it('does NOT allow a invalid email address', () => {
    const emailToType = 'rahu';
    submitEmail(emailToType);
    cy.getByData('success-message').should('not.exist');
  });

  it('should raise a server error if email used already exists', () => {
    const emailToType = 'john@example.com';
    submitEmail(emailToType);
    cy.getByData('success-message').should('not.exist');
    cy.getByData('server-error-message')
      .should('exist')
      .contains(
        `Error: ${emailToType} already exists. Please use a different email address.`
      );
  });
});
export {};
