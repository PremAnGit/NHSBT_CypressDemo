import addContext from 'mochawesome/addContext';

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    // Build the screenshot path.
    // The path format depends on how Cypress names your screenshots.
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    const screenshotPath = `cypress/screenshots/${Cypress.spec.name}/${screenshotFileName}`;
    
    // Attach to Mochawesome context
    addContext({ test }, screenshotPath);
  }
});
