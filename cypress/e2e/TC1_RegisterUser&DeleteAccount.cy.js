import {home,signup,accountInfo,loggedInAs} from '../pages/signupPage';

describe('TC1_Register User & Delete Account Sucessfully', () => {

  const timestamp = Date.now().toString();
  const username  = `TestUser${timestamp}`;
  const email     = `user${timestamp}@example.com`;
  const password = 'MyStrongPassword!';
  const dobDay ='3';
  const dobMonth = 'June';
  const dobYear = '1990';


  beforeEach(function () {
    //Step 1 and 2: browser launch & visit baseUrl 
    cy.baseUrl(); 
    cy.fixture('userData').as('signupData');   
  });

  it('Navigate to and verify homepage URL, SignIn, LogIn and then delete account', () => {    
    
    cy.get('@signupData').then((signupData) => {
    const address = signupData.signupUser.address;
    cy.log('address is', address);

    //Step 3 : Verify home page has loaded sucesfully
    const homepage = Cypress.config('homepageUrl');
    cy.url().should('eq', homepage);
    cy.contains('Home').should('exist');

    //Step 4 : Click on 'Signup / login' button
    cy.clickByText(home.signupLoginBtn);
    
    //Step 5 : Verify 'New User Signup' in visible
    cy.contains(signup.newUserText).should('be.visible');

    //Step 6 : Enter Name and email Address
    cy.fillSignupBasic(username, email);
    
    //Step 7 : Click Sgin up Button
    cy.clickSignupButton();

    // Step 8: Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.verifyEnterAccountInfoHeading(accountInfo.enterAccountInfoText);

    //Step 9: Fill details: Title, Name, Email, Password, Date of birth
    cy.enterSignupDetailsPart1(password,dobDay,dobMonth,dobYear);

    //Step 10 : Select checkbox 'Sign up for our newsletter!'
    cy.checkSignupNewsLetter();

    //Step 11 : Select checkbox 'Receive special offers from our partners!'
    cy.checkSpecialOffers();

    //Step 12 : Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.enterSignupDetailsPart2(address);

    //Step 13 : Click 'Create Account button'
    cy.clickByText('Create Account');

    //Step 14 :  Verify that 'ACCOUNT CREATED!' is visible 
    cy.verifyAccountCreationSucess();

    //Step 15 : Click 'Continue' button
    cy.clickByText('Continue');

    //Step 16 : Verify that 'Logged in as username' is visible
    cy.contains(loggedInAs(username)).should('be.visible');

    //Step 17 & 18 : Click 'Delete Account' button
    cy.deleteAccount();

  });
});
});