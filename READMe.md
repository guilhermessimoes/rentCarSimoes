# Cadastro de carro
  **Requisitos funcionais**
  - Deve ser possível cadastrar um novo carro.
  - Deve ser possível listar todas as categorias.

  **Regra de negocio**
  - Não deve ser possível cadastrar um carro com uma placa já existente.
  - Não deve ser possível alterar a placa de um carro já cadastrado.
  - O Carro deve ser cadastrado com, por padrão com disponibilidade.
  - Somente usuario admin pode realizar o cadastro.

# Listagem de carro
  **Requisitos funcionais**
  - Deve ser possível listar todos os carros disponiveis.
  - Deve ser possível listar todos os carros disponiveis pelo nome da categoria.
  - Deve ser possível listar todos os carros disponiveis pelo nome da marca.
  - Deve ser possível listar todos os carros disponiveis pelo nome do carro.

  **Regra de negocio**
  - O usuário não precisa estar logado no sistema.

# Cadastro de especificação do carro
  **Requisitos funcionais**
  - Deve ser possível cadastrar uma especificação para um carro.
  - Deve  ser possível listar todas as especificações.
  - Deve ser possível listar todos os carros.
  - Somente usuario admin pode realizar o cadastro.

  **Regra de negocio**
  - Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
  - Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.

# Cadastro de imagens do carro
  **Requisitos funcionais**
  - Deve ser possível cadastrar a imagem do carro

  **Requisitos funcionais**
  - Utilizar o multer para upload dos arquivos.

  **Regra de negocio**
  - O Usuario deve poder cadastrar mais de uma imagem para o mesmo carro.
  - Somente usuario admin pode realizar o cadastro.+

# Aluguel de  carro
  **Requisitos funcionais**
  - Deve ser possível cadastrar um aluguel

  **Regra de negocio**
  - O aluguel deve ter duração mínima de 24 horas.
  - Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo usuario.
  - Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo carro.
