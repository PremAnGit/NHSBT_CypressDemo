import {
    accountCreated,
    accountInfo,
    signup
  } from '../pages/signupPage';

// Navigate to the base url
Cypress.Commands.add('baseUrl', () => {
    cy.visit('/');
  });

// Click a button by visible text
Cypress.Commands.add('clickByText', (text) => {
    cy.contains(text).click();
  });

// Fill signup basic info
Cypress.Commands.add('fillSignupBasic', (name, email) => {
    cy.get(signup.nameField).should('have.length', 1).type(name);
    cy.get(signup.emailField).should('have.length', 1).type(email);
  });

// Click Signup Button
Cypress.Commands.add('clickSignupButton', () => {
    cy.get(signup.signupButton).click();
  });

// Verify Enter Account Information Visible
Cypress.Commands.add('verifyEnterAccountInfoHeading', (enterAccountInfoText) => {
    cy.contains('h2.title.text-center', enterAccountInfoText)
      .should('be.visible')
      .then($el => {
        // ensure only one such element
        expect($el.length).to.eq(1);
        // verify exact text
        expect($el.text().trim()).to.eq('Enter Account Information');
      });
  });
  

  // Fill account information part1
Cypress.Commands.add('enterSignupDetailsPart1', (password, day, month, year) => {
    cy.get(accountInfo.genderSelect).check();
    cy.get(accountInfo.passwordField).type(password);
    cy.get(accountInfo.daysSelect).select(day);
    cy.get(accountInfo.monthsSelect).select(month);
    cy.get(accountInfo.yearsSelect).select(year);
  });

  // Select the checkbox 'signup for our Newsletter'
  Cypress.Commands.add('checkSignupNewsLetter',() =>{
    cy.get(accountInfo.newsletterCheckbox).check();
  });

  //Selet the checkbox to "Receive special offers from our partners"
  Cypress.Commands.add('checkSpecialOffers',() => {
    cy.get(accountInfo.offersCheckbox).check();
  });

  // Fill account information part2
Cypress.Commands.add('enterSignupDetailsPart2', (firstName, lastName, company, address1, address2, country, state, city, zipcode, mobile) => {
    cy.get('input[name="first_name"]').type(firstName);
    cy.get('input[name="last_name"]').type(lastName);
    cy.get('input[name="company"]').type(company);
    cy.get('input[name="address1"]').type(address1);
    cy.get('input[name="address2"]').type(address2);
    cy.get('select[name="country"]').select(country);
    cy.get('input[name="state"]').type(state);
    cy.get('input[name="city"]').type(city);
    cy.get('input[name="zipcode"]').type(zipcode);
    cy.get('input[name="mobile_number"]').type(mobile);
  });


  // Verify if the acount is created sucessfully ( note: currently the account created text is in Title case and not all are capitals)
  Cypress.Commands.add('verifyAccountCreationSucess',()=>{
    cy.get('h2.title.text-center')
    .should('have.length', 1)
    .should('be.visible')
    .invoke('text')
    .then(text => {
      expect(text.trim()).to.eq('Account Created!');
    });
    });

  // Delete account ( note: currently the account deleted text is in Title case and not all are capitals)
Cypress.Commands.add('deleteAccount', () => {
    cy.clickByText('Delete Account');
    cy.get('h2[data-qa="account-deleted"]', { timeout: 10000 })
    .should('be.visible')
    .and('contain', 'Account Deleted');
    cy.clickByText('Continue');
  });