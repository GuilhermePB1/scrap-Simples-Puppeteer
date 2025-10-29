# WebScrap Simples com o Puppeteer

Um projeto de web scraping desenvolvido com Node.js e Puppeteer para extrair dados de sites web de forma automatizada.

## 📋 Descrição

Este projeto utiliza Puppeteer para realizar scraping de dados de websites. Atualmente configurado para extrair informações de livros do site "Books to Scrape", incluindo títulos e preços.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Puppeteer** - Biblioteca para controle do navegador Chrome/Chromium
- **JavaScript ES6+** - Linguagem de programação

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/GuilhermePB1/scrap-Simples-Puppeteer.git
cd scrap-Simples-Puppeteer
```

2. Instale as dependências:
```bash
npm install
```

## 🔧 Como Usar

Execute o script principal:
```bash
node index.js
```

O script irá:
1. Abrir um navegador em modo headless
2. Navegar até o site Books to Scrape
3. Extrair títulos e preços dos livros
4. Exibir os dados no console
5. Fechar o navegador automaticamente

## 📁 Estrutura do Projeto

```
scrap-Simples-Puppeteer/
├── index.js          # Arquivo principal com a lógica de scraping
├── package.json       # Configurações e dependências do projeto
├── .gitignore        # Arquivos ignorados pelo Git
└── README.md         # Documentação do projeto
```

## ⚙️ Configurações

O Puppeteer está configurado para executar em modo headless. Para visualizar o navegador durante a execução, altere a linha no `index.js`:

```javascript
// De:
const browser = await pupperteer.launch({ headless: "new" });

// Para:
const browser = await pupperteer.launch({ headless: false });
```

## 🛠️ Personalização

Para fazer scraping de outros sites, modifique a função `page.evaluate()` no arquivo `index.js` com os seletores CSS apropriados para o site desejado.

### Exemplo de customização:
```javascript
const content = await page.evaluate(() => {
    // Seus seletores personalizados aqui
    const elements = [];
    document.querySelectorAll("seu-seletor").forEach(element => {
        elements.push({
            // Dados que você quer extrair
        });
    });
    return elements;
});
```

## 📝 Observações Importantes

- **Respeite os termos de uso** dos sites que você está fazendo scraping
- **Implemente delays** entre requisições para não sobrecarregar os servidores
- **Verifique a legalidade** do scraping para cada site específico
- **Use rate limiting** em projetos de produção

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `package.json` para mais detalhes.

## 🔗 Links Úteis

- [Documentação do Puppeteer](https://pptr.dev/)
- [Node.js](https://nodejs.org/)
- [Books to Scrape](https://books.toscrape.com/) - Site usado no exemplo

## 🐛 Problemas Conhecidos

- Certifique-se de ter uma conexão com a internet estável
- Em alguns sistemas, pode ser necessário instalar dependências adicionais do Chrome/Chromium

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas, abra uma issue no repositório.
