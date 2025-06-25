/// <reference types="cypress" />

describe("Tela de Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("faz login com sucesso", () => {
    cy.intercept("POST", "**/api/user/auth/login", {
      statusCode: 200,
      body: { token: "fake-token" },
    }).as("loginRequest");

    cy.get('[data-cy="email-login"]').type("lucas.souzaduarte.73@gmail.com");
    cy.get('[data-cy="password-login"]').type("Souza125");
    cy.get('[data-cy="btn-login"]').click();

    cy.wait("@loginRequest");
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("mostra alerta ao falhar no login", () => {
    cy.intercept("POST", "**/api/user/auth/login", {
      statusCode: 401,
      body: { detail: "Invalid credentials" },
    }).as("loginFail");

    cy.get('[data-cy="email-login"]').type("usuario@teste.com");
    cy.get('[data-cy="password-login"]').type("senhaerrada");
    cy.get('[data-cy="btn-login"]').click();

    cy.wait("@loginFail");

    cy.on("window:alert", (txt) => {
      expect(txt).to.include(
        "Erro ao fazer login! Verifique os dados e tente novamente."
      );
    });
  });
});
