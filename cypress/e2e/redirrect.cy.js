describe('User Login and Profile Page Test', () => {
    const baseUrl = 'http://localhost:5173' // Адрес приложения
    
    beforeEach(() => {
      cy.visit(baseUrl); // Открыть главную страницу
    });
    it('should redirect to login page', () => {
      cy.get('a[href="/login"]').click();
      cy.url().should('include', '/login');
      cy.get('input[name="email"]').type('123@123.com');
      cy.get('input[name="password"]').type('123');
      cy.get('button[id="submit"]').click();
  
      cy.url().should('include', '/profile');
      cy.contains('Тут ваш профиль!'); 
    });
  
    it('should redirect to login page from profile', () => {
      cy.get('a[href="/login"]').click();

      cy.url().should('include', '/login');
      
      cy.get('input[name="email"]').type('123@123.com');
      cy.get('input[name="password"]').type('123');
      cy.get('button[id="submit"]').click();
  
      cy.url().should('include', '/profile');
      cy.contains('Тут ваш профиль!'); 

      cy.get('a[href="/login"]').click();
      cy.url().should('include', '/login');
    });
  });
  