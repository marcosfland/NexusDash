# Dashboard Híbrido de Dados

## Descrição do Projeto
Este projeto é uma aplicação híbrida de dashboard para visualização de dados, permitindo que usuários insiram informações manualmente e sincronizem com APIs externas sempre que a internet estiver disponível. Desenvolvido para rodar localmente, o software combina acessibilidade off-line com atualizações automáticas on-line, garantindo que o usuário tenha sempre os dados mais recentes sem depender exclusivamente de uma conexão estável.

Com foco em flexibilidade e praticidade, o dashboard permite visualizar dados em diferentes tipos de gráficos e exportá-los em formato PDF, facilitando o compartilhamento e a personalização dos relatórios.

## Funcionalidades
- **Visualização de Dados em Gráficos**: Exibe dados em múltiplos formatos de gráfico (linha, barra, pizza, etc.), permitindo que o usuário personalize a visualização conforme o tipo de informação.
- **Atualização de Dados via Internet**: A aplicação realiza chamadas para APIs, como de clima ou câmbio, atualizando as informações automaticamente sempre que uma conexão estiver disponível.
- **Modo Off-line**: O software armazena os dados localmente, garantindo que as informações mais recentes estejam acessíveis mesmo sem conexão com a internet.
- **Exportação de Relatórios em PDF**: Permite a criação de relatórios em PDF, com gráficos e tabelas personalizáveis para fácil compartilhamento.
- **Controle de Conectividade e Sincronização**: O software detecta a disponibilidade de internet e atualiza os dados conforme necessário, indicando ao usuário se os dados estão atualizados ou no modo off-line.

## Tecnologias Utilizadas
- **Frontend**: [Electron](https://www.electronjs.org/) para interface estilo web em desktop ou [Qt](https://www.qt.io/) para uma interface tradicional de software.
- **Backend e Banco de Dados**: [SQLite](https://www.sqlite.org/) para armazenamento local de dados e organização dos dados sincronizados.
- **Visualização de Dados**: Bibliotecas como [Plotly](https://plotly.com/) ou [Chart.js](https://www.chartjs.org/) para criação de gráficos interativos e personalizáveis.
- **Exportação para PDF**: [ReportLab](https://www.reportlab.com/) ou [pdfkit](https://pypi.org/project/pdfkit/) para geração de relatórios em PDF.

## Como Funciona
1. **Inserção e Sincronização de Dados**: O usuário pode inserir dados manualmente ou permitir que a aplicação puxe dados automaticamente de APIs externas, como informações climáticas e taxas de câmbio.
2. **Visualização e Personalização de Gráficos**: Escolha entre diferentes formatos de gráfico e personalize a visualização dos dados.
3. **Exportação e Compartilhamento**: Exporte os dados em um arquivo PDF, contendo gráficos e tabelas selecionados pelo usuário.
4. **Modo Híbrido (On-line/Off-line)**: A aplicação funciona em modo off-line com dados locais e, quando conectada à internet, sincroniza automaticamente as informações para garantir que os dados estejam atualizados.

## Contribuindo
Sinta-se à vontade para contribuir! Sugestões e melhorias são bem-vindas. Veja os arquivos `CONTRIBUTING.md` e `CODE_OF_CONDUCT.md` para mais detalhes sobre como contribuir com o projeto.

## Roadmap
- [ ] Configuração do ambiente inicial do projeto.
- [ ] Implementação do armazenamento de dados com SQLite.
- [ ] Integração com APIs para sincronização de dados (ex: clima e câmbio).
- [ ] Desenvolvimento das funcionalidades de exportação para PDF.
- [ ] Adição de gráficos personalizáveis e opções de visualização.
- [ ] Testes de conectividade e estabilidade do modo híbrido.
