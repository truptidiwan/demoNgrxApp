describe('Home spec', () => {
  beforeEach(() => {
    // Visit the page that fetches data from the API
    // cy.intercept('GET', 'https://fakestoreapi.com/products', {
    //   statusCode: 200,
    //   body: [
    //     {
    //       id: 1,
    //       title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    //       price: 109.95,
    //       description:
    //         'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    //       category: "men's clothing",
    //       image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    //       rating: {
    //         rate: 3.9,
    //         count: 120,
    //       },
    //     },
    //   ],
    // }).as('getProducts');
    // cy.visit('http://localhost:4200');
  });
  it('Home page loads', () => {
    cy.visit('http://localhost:4200');

    // Title of application
    cy.get('h1')
      .should('have.id', 'title')
      .invoke('text')
      .then((text) => {
        expect(text).to.equal('Amazon');
      });

    // On click of About Us link should redirect
    cy.contains('About Us').click();
    cy.url().should('include', '/about');

    // On click of Contact Us link should redirect
    cy.contains('Contact Us').click();
    cy.url().should('include', '/contact');

    // On click of Cart link should redirect
    cy.contains('Cart').click();
    cy.url().should('include', '/cart');

    // On click of Counter link should redirect
    cy.contains('Counter').click();
    cy.url().should('include', '/counter');
  });

  // it('fetches data from backend and displays it on the UI', () => {
  //   // Intercept the API call that fetches data
  //   cy.intercept('GET', 'https://fakestoreapi.com/products').as('getProducts'); // Adjust the URL as necessary

  //   // Wait for the API call to complete
  //   cy.wait(500);
  //   cy.wait('@getProducts');

  //   // Check if the data is displayed on the UI
  //   cy.get('app-product-card') // Adjust the selector to match your app's UI
  //     .should('be.visible')
  //     .and('have.length.greaterThan', 0); // Ensure at least one item is displayed

  //   // Optionally, verify that specific data is displayed
  //   // cy.get('app-product-card').first().contains('Expected Data Item'); // Adjust based on your expected data
  // });

  // it('fetches data from fakejson.com and displays it correctly', () => {
  //   // Intercept the API call to fakejson.com

  //   // Trigger the action that causes the API call (e.g., button click)
  //   // cy.get('button#fetch-users').click(); // Uncomment and adjust based on your app

  //   // Wait for the intercepted API call
  //   // cy.visit('http://localhost:4200/home');
  //   // cy.contains('Home').click();
  //   // cy.wait(1000);
  //   cy.wait('@getProducts');

  //   // Check if the data is displayed correctly on the UI
  //   cy.get('.product-card') // Adjust the selector to match your app's UI
  //     .should('be.visible')
  //     .and('have.length', 1); // Check that two users are displayed

  //   // Verify specific data
  //   // cy.get('.user-item').first().should('contain', 'John Doe');
  //   // cy.get('.user-item').eq(1).should('contain', 'Jane Smith');
  // });

  it('posts new item to the server', () => {
    // spy on the network call GET /todos
    cy.intercept('GET', 'https://fakestoreapi.com/products').as('getProducts');
    // and spy on adding the new todo
    // cy.intercept('POST', '/todos').as('new-item');
    cy.visit('http://localhost:4200/home');
    // cy.wait('@getProducts');
    // Check if the data is displayed correctly on the UI
    cy.get('.product-card') // Adjust the selector to match your app's UI
      .should('be.visible');
    // .and('have.length', 1);
  });
});
