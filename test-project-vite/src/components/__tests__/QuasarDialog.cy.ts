import DialogWrapper from 'app/test/cypress/wrappers/DialogWrapper.vue';
import QuasarDialog from '../QuasarDialog.vue';

describe('QuasarDialog', () => {
  it('should show a dialog with a message', () => {
    const message = 'Hello, I am a dialog';
    cy.mount(DialogWrapper, {
      props: {
        component: QuasarDialog,
        componentProps: {
          message,
        },
      },
    });
    cy.dataCy('dialog').should('exist').should('contain', message);
  });

  it('should close a dialog when clicking ok', () => {
    // The dialog is still visible from the previous test
    cy.dataCy('dialog').should('exist').dataCy('ok-button').click();
    cy.dataCy('dialog').should('not.exist');
  });
});
