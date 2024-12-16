describe('User Login and Profile Page Test', () => {
    const baseUrl = 'http://localhost:5173' 
    
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('should allow user to login and redirect to profile page', () => {
      cy.get('a[href="/login"]').click();
  
      cy.url().should('include', '/login');
      
      cy.get('input[name="email"]').type('123@123.com');
      cy.get('input[name="password"]').type('123');
      cy.get('button[id="submit"]').click();
  
      cy.url().should('include', '/profile');
      cy.contains('Тут ваш профиль!'); 
    });
  
    it('should show error for invalid login credentials', () => {
      cy.get('a[href="/login"]').click();

      cy.get('input[name="email"]').type('invaliduser@example.com');
      cy.get('input[name="password"]').type('wrongpassword');
      cy.get('button[id="submit"]').click();
  
      cy.contains('Incorrect data :(').should('be.visible');
    });
  });
  