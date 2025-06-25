/// <reference types="cypress" />

describe("Tela de Cadastro", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("realiza cadastro com sucesso", () => {
    cy.intercept("POST", "**/api/user/create", {
      statusCode: 201,
      body: { message: "Conta criada com sucesso!" },
    }).as("registerSuccess");

    cy.get('[data-cy="first-name"]').type("Lucas");
    cy.get('[data-cy="last-name"]').type("Souza");
    cy.get('[data-cy="cpf"]').type("41679608851");
    cy.get('[data-cy="email-register"]').type("otester@email.com");
    cy.get('[data-cy="password-register"]').type("Senha123");
    cy.get('[data-cy="confirm-password"]').type("Senha123");
    cy.get('[data-cy="btn-register"]').click();

    cy.wait("@registerSuccess");

    cy.on("window:alert", (txt) => {
      expect(txt).to.include("Conta criada com sucesso!");
    });
  });

  it("mostra alerta se e-mail já estiver em uso", () => {
    cy.intercept("POST", "**/api/user/create", {
      statusCode: 400,
      body: {
        email: ["Este e-mail já está em uso."],
      },
    }).as("registerFail");

    cy.get('[data-cy="first-name"]').type("Lucas");
    cy.get('[data-cy="last-name"]').type("Souza");
    cy.get('[data-cy="cpf"]').type("41679608851");
    cy.get('[data-cy="email-register"]').type("lucas.souzaduarte.73@gmail.com");
    cy.get('[data-cy="password-register"]').type("Senha123");
    cy.get('[data-cy="confirm-password"]').type("Senha123");
    cy.get('[data-cy="btn-register"]').click();

    cy.wait("@registerFail");

    cy.on("window:alert", (txt) => {
      expect(txt).to.include("Este e-mail já está em uso");
    });
  });
});
