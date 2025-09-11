# 📦 NPM - Comandos Básicos

### Um guia rápido para iniciar projetos Node.js e gerenciar pacotes com NPM.

## 1. Inicializar um projeto Node.js

Cria um `package.json` com configurações padrão:

```bash
npm init -y
```

## 2. Instalação de pacotes

### Instala a biblioteca e adiciona como dependência no `package.json`.
```bash
npm install nome-do-pacote
```

### Instala o pacote com versão especifica.
```bash
npm install nome-do-pacote@versao 
```

### Evita que futuras atualizações automáticas alterem a versão instalada.
```bash
npm install nome-do-pacote -E
```

### Instala o pacote apenas para desenvolvimento (ex.: testes, build tools).
```bash
npm install nome-do-pacote --save-dev
```

### Instala o pacote para produção.
```bash
npm install nome-do-pacote --save-prod
```

## 3. Atualização de pacotes

### Atualizar dependências para a versão mais recente.
```bash
npm update
```

### Atualizar um pacote específico para a última versão.
```bash
npm install nome-do-pacote@latest
```

## 4. Desinstalar pacotes

### Desinstalar pacote.
```bash
npm uninstall nome-do-pacote
```

## 4. Listar pacotes

### Lista pacotes.
```bash
npm ls
```

### Lista pacotes com base na profundidade.
```bash
npm ls --depth=valor
```

### Lista somente pacotes instalados por você.
```bash
npm ls --depth=0
```

### Lista somente pacotes desatualizados.
```bash
npm outdated
```

---