import {
    accountCreated,
    accountDeleted,
    accountInfo,
    addressInfo,
    signup
  } from '../../pages/signupPage';

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
    cy.contains(accountInfo.enterAccountInfoElement, enterAccountInfoText)
      .should('be.visible')
      .then($el => {
        // ensure only one such element
        expect($el.length).to.eq(1);
        // verify exact text
        expect($el.text().trim()).to.eq(accountInfo.enterAccountInfoText);
        // check if the text is in uppercase
    cy.get('h2')
      .should ('have.css','text-transform','uppercase');
      });
  });
  

  // Fill account information part1
Cypress.Commands.add('enterSignupDetailsPart1', (password, day, month, year) => {
    cy.get(accountInfo.genderSelect).check();
    cy.get(accountInfo.passwordField).type(password);
    cy.get(accountInfo.daysSelect).should('be.visible').select(day, { force: true });
    cy.get(accountInfo.monthsSelect).should('be.visible').select(month,{force: true});
    cy.get(accountInfo.yearsSelect).should('be.visible').select(year, { force: true });
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
Cypress.Commands.add('enterSignupDetailsPart2', (details) => {  
    cy.get(addressInfo.firstName).type(details.firstName);
    cy.get(addressInfo.lastName).type(details.lastName);
    cy.get(addressInfo.company).type(details.company);
    cy.get(addressInfo.address1).type(details.address1);
    cy.get(addressInfo.address2).type(details.address2);
    cy.get(addressInfo.countrySelect).should('be.visible').select(details.country, {force: true});
    cy.get(addressInfo.state).type(details.state);
    cy.get(addressInfo.city).type(details.city);
    cy.get(addressInfo.zipcode).type(details.zipcode);
    cy.get(addressInfo.mobile).type(details.mobile);
  });


  // Verify if the acount is created sucessfully ( note: currently the account created text is in Title case and not all are capitals)
Cypress.Commands.add('verifyAccountCreationSucess',()=>{
    cy.get(accountCreated.accElement)
    .should('have.length', 1)
    .should('be.visible')
    .invoke('text')
    .then(text => {
      expect(text.trim()).to.eq(accountCreated.text);
    
    // check if the text is in uppercase
    cy.get('h2')
    .should ('have.css','text-transform','uppercase');
    });
    });

  // Delete account ( note: currently the account deleted text is in Title case and not all are capitals)
Cypress.Commands.add('deleteAccount', () => {
    cy.clickByText('Delete Account');
    cy.get(accountDeleted.accDelElement, { timeout: 10000 })
    .should('be.visible')
    .and('contain', accountDeleted.text);
    
    // check if the text is in uppercase
    cy.get('h2')
    .should('have.css', 'text-transform','uppercase')

    cy.clickByText('Continue');
  });