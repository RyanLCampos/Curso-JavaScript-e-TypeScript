function Calculadora() {
  let display = document.querySelector('.display');

  this.inicia = () => {
    capturaCliques();
    capturaEnter();
  }

  const capturaCliques = () => {
    document.addEventListener('click', (event) => {
      const el = event.target;

      if (el.classList.contains('btn-num')) addNumDisplay(el);
      if (el.classList.contains('btn-clear')) clear();
      if (el.classList.contains('btn-del')) del();
      if (el.classList.contains('btn-eq')) realizaConta();

      if(!el.classList.contains('display')) el.blur();
    });
  };

  const capturaEnter = () => {
    document.addEventListener('keypress', (event) => {
      if (event.key !== 'Enter') return;
      realizaConta();
    });
  };

  const addNumDisplay = (el) => (display.value += el.innerText);
  const clear = () => (display.value = '');
  const del = () => (display.value = display.value.slice(0, -1));
  const realizaConta = () => {
    let conta = display.value;

    try {
      if (!/^[0-9+\-*/(). ]+$/.test(conta)) {
        alert('Conta Inválida');
        clear();
        return;
      }
      conta = eval(conta);

      if (!conta) {
        alert('Conta Inválida');
        clear();
        return;
      }

      display.value = String(conta);
    } catch (error) {
      alert('Conta Inválida');
      clear();
      return;
    }
  };
}

const calculadora = new Calculadora();

calculadora.inicia();
