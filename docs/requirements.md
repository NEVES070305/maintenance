# PRD - Product Requirements Document (Template)

# *Introdução & objetivo*

Esta documentação descreve o desenvolvimento de um Sistema de Gerenciamento de Manutenção (SGM) para uma empresa industrial que fabrica peças automotivas. O objetivo principal é criar uma aplicação web que otimize os processos de manutenção, melhorando a organização, a comunicação e a eficiência dentro da empresa. O SGM permitirá o cadastro de máquinas, gerenciamento de manutenções, controle de estoque de peças, e gerenciamento de equipes, diferenciando-se dos sistemas manuais atuais pela sua automação e capacidade de gerar relatórios detalhados.

# *Por que* implementar isto?

A implementação do SGM é motivada pela necessidade de resolver problemas críticos no processo atual de gerenciamento de manutenção, como falta de organização, comunicação ineficiente e perda de tempo e produtividade. As razões estratégicas incluem:

- **Motivação Pessoal e Visão:** Melhorar a eficiência operacional e a segurança dos colaboradores.
- **Evidências de Sucesso Inicial:** Empresas que adotam sistemas automatizados de gerenciamento de manutenção relatam melhorias significativas na produtividade.
- **Oportunidades de Mercado:** A indústria automotiva está em constante evolução, e a automação de processos é uma tendência crescente.
- **Oportunidades de Monetização:** Redução de custos operacionais e aumento da produtividade.

---

# ***Público alvo***

O público alvo principal do SGM inclui:

| Perfil de Usuário         | Descrição, Necessidades e Interesses                                 |
|---------------------------|----------------------------------------------------------------------|
| Gestores de Manutenção    | Precisam de visibilidade completa sobre o status e histórico das manutenções. |
| Técnicos de Manutenção    | Necessitam de uma ferramenta eficiente para registrar e acompanhar solicitações de manutenção. |
| Equipes de Suporte        | Precisam gerenciar o estoque de peças e garantir que os materiais estejam disponíveis quando necessário. |
| Administradores           | Precisam de relatórios detalhados e controle de acesso para diferentes níveis de usuário. |


# *Personas*

1. **João, o Gestor de Manutenção:** João é responsável por garantir que todas as máquinas estejam funcionando corretamente. Seu principal objetivo é minimizar o tempo de inatividade das máquinas e controlar os custos de manutenção.
2. **Maria, a Técnica de Manutenção:** Maria realiza manutenções preventivas e corretivas nas máquinas. Ela precisa de um sistema que facilite o registro das solicitações e o acompanhamento do status das manutenções.
3. **Carlos, o Especialista em Estoque:** Carlos gerencia o estoque de peças e materiais. Ele precisa de uma ferramenta que permita registrar entradas e saídas de peças e gerar relatórios de estoque.
---

# *Requisitos Funcionais*


- **Gerenciamento de Máquinas:**
    - Cadastro de máquinas com detalhes como nome, tipo, modelo, data de fabricação, número de série, localização e histórico de manutenção.
    - Visualização detalhada de cada máquina, incluindo histórico de manutenções e informações sobre peças e materiais utilizados.
- **Gerenciamento de Manutenções:**
    - Cadastro de solicitações de manutenção, incluindo descrição do problema, data da solicitação, prioridade, responsável e status.
    - Gerenciamento do status da manutenção (pendente, em andamento, concluída, cancelada) com possibilidade de adicionar comentários e arquivos.
    - Atribuição de equipes de manutenção às solicitações.
    - Registro das peças e materiais utilizados, incluindo quantidade e fornecedor. 
    - Geração de relatórios de manutenção por máquina, período e tipo (preventiva, corretiva, etc.). **P2**
- **Controle de Estoque de Peças:**
    - Cadastro de peças de reposição com informações como nome, código, fornecedor, quantidade em estoque e valor unitário. **P1**
    - Registro de entradas e saídas de peças, com data e quantidade. **P2**
    - Visualização do estoque de peças em tempo real e geração de relatórios. **P2**
- **Gerenciamento de Equipes:**
    - Cadastro de equipes de manutenção, incluindo informações sobre os colaboradores e suas especialidades.
    - Atribuição das equipes às solicitações de manutenção. **P1**
    - Gerenciamento da disponibilidade dos colaboradores. **P1**
- **Autenticação e Autorização:**
    - Criação de contas de usuário para diferentes níveis de acesso (administrador, técnico, etc.). **P1**
    - Controle de acessos a diferentes funcionalidades da aplicação. **P1**


**P1** = **Crítico | P1 = Importante | P2 = Bom ter**

### *Casos de uso*

> **Caso de Uso 1:** João, o gestor de manutenção, acessa o sistema para visualizar o histórico de manutenção de uma máquina específica e gerar um relatório para a diretoria.
>
> **Caso de Uso 2:** Maria, a técnica de manutenção, registra uma nova solicitação de manutenção após identificar um problema durante uma inspeção de rotina.
>
> **Caso de Uso 3:** Carlos, o especialista em estoque, registra a entrada de novas peças e atualiza o estoque no sistema.

---

# *Requisitos Não Funcionais*

[Os requisitos não funcionais descrevem os critérios de desempenho, segurança, usabilidade e outras características que o sistema deve possuir. Eles garantem que o sistema funcione eficientemente sob diversas condições.]

1. **NF1:** Identifique aspectos como desempenho, segurança, usabilidade, confiabilidade, etc. **P1**
2. **NF2:** Identifique aspectos como desempenho, segurança, usabilidade, confiabilidade, etc. **P2**
3. **NF3:** Identifique aspectos como desempenho, segurança, usabilidade, confiabilidade, etc. **P3**

**P1** = **Crítico | P1 = Importante | P2 = Bom ter**

### 📊 Métricas

- **Interface amigável e intuitiva:** Deve ser fácil de usar e intuitiva para todos os usuários, independentemente do nível de conhecimento técnico.
- **Responsividade:** A aplicação deve funcionar perfeitamente em diferentes dispositivos (computadores, tablets, smartphones).
- **Segurança:** Implementar medidas de segurança para proteger os dados, evitando acessos não autorizados e protegendo contra ataques.
- **Desempenho:** A aplicação deve ser rápida e eficiente, respondendo rapidamente às solicitações, mesmo com um grande volume de dados.

### Métricas

| Medida         | Estado Atual | Esperado | Resultados |
|----------------|--------------|----------|------------|
| Tempo de resposta | 2 segundos   | <1 segundo |            |
| Disponibilidade  | 95%          | 99.9%    |            |
| Segurança        | N/A          | PCI DSS  |            |

---

# *Fora de escopo*

<aside>
🚫  Não será abordado neste projeto a integração com sistemas ERP ou outros sistemas de gestão existentes na empresa.

</aside>

# *User Experience*

<aside>
🖍️ Crie links para seu arquivos de UX aqui: UX Flows, UI, etc.

</aside>

# *Dependências*

<aside>
⚠️ Quais necessidades que precisam ser supridas para que este produto/feature seja desenvolvido?

</aside>

# *Plano de lançamento*

*Crie uma lista de itens que precisão ser atendidos para o lançamento do produto no mercado, por exemplo:*

1. *Regras para lançamento interno:*
    - [ ]  *Validação*
    - [ ]  *Divulgação*

# 💌 *Plano de comunicação*

Quando as comunicações acontecerão? Quem será notificado sobre esse novo recurso? Enviaremos e-mails e notificações no aplicativo?






---

## Fora de Escopo

🚫 Não será abordado neste projeto a integração com sistemas ERP ou outros sistemas de gestão existentes na empresa.

---

## User Experience

🖍️ [Link para arquivos de UX aqui: UX Flows, UI, etc.]

---

## Dependências

⚠️ Quais necessidades que precisam ser supridas para que este produto/feature seja desenvolvido?

### Ferramentas de Desenvolvimento

1. **Next.js**
   - Framework React para construção de aplicações web otimizadas e server-side rendered.
   - [Documentação Next.js](https://nextjs.org/docs)

2. **Tailwind CSS**
   - Framework de utilitários CSS para estilização rápida e eficiente.
   - [Documentação Tailwind CSS](https://tailwindcss.com/docs)

3. **React**
   - Biblioteca JavaScript para construir interfaces de usuário.
   - [Documentação React](https://reactjs.org/docs/getting-started.html)

4. **TypeScript**
  - Superset de JavaScript que adiciona tipagem estática ao código.
   - [Documentação TypeScript](https://www.typescriptlang.org/docs/)

---

## Plano de Lançamento

1. **Regras para lançamento interno:**
    - [ ] Validação
    - [ ] Divulgação

---

## Plano de Comunicação

💌 Quando as comunicações acontecerão? Quem será notificado sobre esse novo recurso? Enviaremos e-mails e notificações no aplicativo?

---

Este PRD serve como guia para o desenvolvimento do Sistema de Gerenciamento de Manutenção, alinhando a equipe de desenvolvimento e os stakeholders com os objetivos, requisitos e expectativas do projeto.