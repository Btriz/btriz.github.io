# 💻 Ambiente de Desenvolvimento com Docker

Este projeto utiliza um contêiner de desenvolvimento baseado na imagem `node-base-dev`, disponível no repositório [`dev-kits`](https://github.com/btriz/dev-kits). Ele fornece uma stack pronta com Node.js, NVM, Zsh, Powerlevel10k e configurações personalizáveis de terminal

---

## 🚀 Como iniciar o contêiner

1. Certifique-se de que possui [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/install/) instalados.

2. Clone o repositório [`dev-kits`](https://github.com/btriz/dev-kits) em algum lugar da sua máquina (fora do projeto):

   ```bash
   git clone https://github.com/btriz/dev-kits.git ~/.dev-kits
3. Os arquivos de configuração do terminal são montados diretamente a partir de:

   `~/dev-kits/configs/`

4. Eexecute na raiz deste projeto:

   ```bash
   docker-compose up -d
   docker exec -it 3d-portfolio zsh
---

## 📦 Estrutura esperada

Este projeto utiliza:

- **Imagem base:** `node-base-dev`  
  Definida em `~/.dev-kits/containers/node-base/`

- **Compose:**  
  Arquivo localizado em `dev/docker-compose.yml`

- **Volumes:**  
  Montagem dos arquivos de terminal a partir de `~/dev-kits/configs`, incluindo:
  - `.zshrc`
  - `aliases.zsh`
  - `.p10k.zsh`
  - `.zsh_history` (opcional)

- **Scripts auxiliares:**  
  Funções como `aliasedit`, definidas no arquivo `aliases.zsh`

- **Entrada padrão:**  
  Shell interativo no contêiner com Zsh + Powerlevel10k configurado
---

## ❕ Notas

- Este contêiner é exclusivo para **desenvolvimento** e não representa o ambiente de produção.

- É necessário manter o `dev-kits` clonado em `~/dev-kits` ou ajustar os caminhos de volume no `docker-compose.yml` conforme sua estrutura.

---

## 🧩 Alternativa sem contêiner

Se preferir desenvolver sem usar Docker, basta ter o Node.js instalado localmente. O projeto pode ser iniciado com os scripts padrão definidos no `package.json`.
