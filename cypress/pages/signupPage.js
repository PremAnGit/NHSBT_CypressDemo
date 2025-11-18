export const home  = {
signupLoginBtn: 'Signup / Login',
};

export const signup = {
    newUserText: 'New User Signup!',
    nameField: 'input[data-qa="signup-name"]',
    emailField: 'input[data-qa="signup-email"]',
    signupButton: 'button[data-qa="signup-button"]'
};

export const accountInfo = {
    enterAccountInfoText: 'Enter Account Information',
    genderSelect: 'input[id="id_gender1"]',
    passwordField: 'input[id="password"]',
    daysSelect: 'select[id="days"]',
    monthsSelect: 'select[id="months"]',
    yearsSelect: 'select[id="years"]',
    newsletterCheckbox: 'input[id="newsletter"]',
    offersCheckbox: 'input[id="optin"]',
  };
  
  export const addressInfo = {
    firstName: 'input[name="first_name"]',
    lastName: 'input[name="last_name"]',
    company: 'input[name="company"]',
    address1: 'input[name="address1"]',
    address2: 'input[name="address2"]',
    countrySelect: 'select[name="country"]',
    state: 'input[name="state"]',
    city: 'input[name="city"]',
    zipcode: 'input[name="zipcode"]',
    mobile: 'input[name="mobile_number"]',
  };
  
  export const accountCreated = {
    text: 'ACCOUNT CREATED!'
  };

  export const loggedInAs = (username) => `Logged in as ${username}`;