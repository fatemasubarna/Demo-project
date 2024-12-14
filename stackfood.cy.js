// Import Cypress commands
/// <reference types="cypress" />

describe('Login Page Test', () => {
  // Define reusable test data
  const validEmail = 'customer@customer.com';
  const validPassword = '12345678';
  const invalidEmail = 'invaliduser@example.com';
  const invalidPassword = 'WrongPassword';

  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('https://stackfood-react.6amtech.com/home')
    cy.get('.mui-style-w5lxws > .MuiStack-root > .MuiButton-contained').click()
    cy.get('.MuiInputBase-root > .MuiButtonBase-root').click()
    cy.wait(120)
    cy.get('.mui-style-p8xknl > .MuiStack-root > .MuiButton-root > .MuiTypography-root').click()
    cy.get('.mui-style-1ojex11 > .MuiButtonBase-root').click()
    ; // Update the URL path to match your login page
  });

  it('should display the login form correctly', () => {
    // Check for email/phone and password input fields
    cy.get('#email_or_phone').should('be.visible');
    cy.get('#password').should('be.visible');

    // Check for the login button
    cy.get('#mui-29').should('be.visible').and('contain', 'Login');
  });

  it('should successfully log in with valid credentials', () => {
    // Enter valid email and password
    cy.get('input[name="email"]').type(validEmail);
    cy.get('input[name="password"]').type(validPassword);

    // Click the login button
    cy.get('button[type="submit"]').click();

    // Assert that the user is redirected to the dashboard or appropriate page
    cy.url().should('include', '/dashboard');

    // Check for a welcome message or user-specific element
    cy.contains('Welcome, Test User').should('be.visible');
  });

  it('should show an error message for invalid credentials', () => {
    // Enter invalid email and password
    cy.get('input[name="email"]').type(invalidEmail);
    cy.get('input[name="password"]').type(invalidPassword);

    // Click the login button
    cy.get('button[type="submit"]').click();

    // Assert that an error message is displayed
    cy.contains('Invalid email or password').should('be.visible');
  });

  it('should show validation messages for empty fields', () => {
    // Click the login button without entering anything
    cy.get('button[type="submit"]').click();

    // Check for validation messages
    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });

  it('should not allow login with an improperly formatted email', () => {
    // Enter an invalid email format and a valid password
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="password"]').type(validPassword);

    // Click the login button
    cy.get('button[type="submit"]').click();

    // Assert that an email format error message is displayed
    cy.contains('Please enter a valid email address').should('be.visible');
  });
});
