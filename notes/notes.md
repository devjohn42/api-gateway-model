Microsserviços -> Pequenos serviços destribuidos

Tipos de Comunicação

HTTP <-> Eventos/Menssageria

Características Importantes

- Responsabilidade Única (SOLID)
  - Um serviço lida apenas com ele mesmo
- Independência de Deploy
  - Um serviço pode ser atualizado/alterado sem interferir nos outros serviços
- Tecnologias Agnósticas
  - Cada serviço pode ter a sua independência de estrutura e linguagem (typescript,
  python, go)
- Descentralização de Dados
  - Gera mais segurança

==========================================================================================

Monolito

Vantagens
- Deploys facilitado
- Fácil desenvolvimento e teste

Desvantagens
- Dificulta a escalabilidate independente
- Tecnologia única para tudo
- Uma falha afeta tudo

Microsserviço

Vantagens
- Escalabilidade independente
- Tecnologias diversificadas
- Falhas isoladas

Desvantagens
- Complexidade de rede (conexão e comunicação)
- Debugging distribuido
- Consistência eventual

==========================================================================================

Quando usar Microsserviços

- Equipe > de 50 desenvolvedores
- Domínios bem definidos -> área de especialidade/negócio (DDD)
- Necessidade de escalabilidade independente
- Tecnologias diferentes por domínio (python, typescript, java, go)

Quando não usar Microsserviços

- Equipe pequena
- Domínios simples
- MVP / Protótipos
- Sem experiência em MS
