Automation Testing - Cypress Framework

1. Install Cypress
 
a. Pre-Requisite Steps:
 - You need Node.js installed (and npm, which comes with Node).

    brew install node  (for MacOS)

    nvm install lts (for powershell)

 - You should have a project folder with a package.json (or run npm init to create one).
 
 - Make sure your Node version meets Cypress’s supported versions.
 
 - Cypress docs list the supported Node/browser versions

b. Installation Steps : 
 - Navigate to your project root in terminal / command prompt.
 
 - Install Cypress as a dev dependency:
 
 npm install --save-dev cypress

c. To verify the installation, run:
npx cypress open


2. Create E2E tests
    a. Create the e2e tests in the e2e folder.
    b. Any common steps in the E2E test, add them to commands.js in the support folder.
    c. Any Page object elements enter them in the respective XYZpage.js in the Pages folder.

3. Execute Automation tests
    These tests can be run in many ways.
    a. To run openly and view the execution, can be done on a New Terminal and run the following command.

         i. npx cypress open(this will by default will open chrome driver).
         
         ii. Select the E2E Testing.
         iii. No select a browser to execution.(Say we can select Chrome).
         iV. Select the respective e2e to run.

    b. To run headless execution (by default it will be chrome)
        
        npx cypress run
        
    c. To run the test with headless and sepecific browser,for eg,  Edge user You can use the following command.

        npx cypress run --browser edge
    

4. Generate, Merge and display HTML Report using Mochaawesome

     a. Package dependencies for mochawesome are 
        - mochawsome, 
        - mochawesome-merge, 
        - mochawsome-report-generator (aka marge)

    and command to install it

    npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

    b. You can do a complete run for the respective tests with the full Mochaawsome report from the package.json with the following script 
    
    npm run report:full
    (Note : You can see all the respective commands in the script section of package.json and in config file we can update the  reporterOption accordingly ).


5. To use Git on the project
    a. Initially to get Git on a local repo. Run 
    
    git init -b main

    b. add node_modules and other irrelevant folder to the git ignore.

    c. Then add modified files that are applicable. if all needed to be added, use

    git add .

    d. Then commit and provide the comment for the commit.

    git commit -m ' some commit message'

    e. then, if no remote if its first time

    git remote add origin <REMOTE_URL> ( in our case its : https://github.com/PremAnGit/NHSBT_CypressDemo.git)

    f. Then, push the branch to remote

    git push -u origin main

    g. For anyone to clone and execute locally. We can do the following way

      i. First clone the project from the respective git repository.
      using url : https://github.com/PremAnGit/NHSBT_CypressDemo.git
      using Github CLI : gh repo clone PremAnGit/NHSBT_CypressDemo

      ii. Then Run below command to install the respective node modules defined in the package.json.
      npm install 

6. To run Cypress on the github pipeline

mkdir -p .github/workflows





