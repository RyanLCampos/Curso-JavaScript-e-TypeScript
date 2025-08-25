function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instancia de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR");
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora(data);
} catch (error) {
    // tratar erro
} finally {
    console.log('Tenha um bom dia.');
}

