function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        if (!/^[0-9+\-*/(). ]+$/.test(conta)) {
          alert("Conta Inválida");
          return;
        }
        conta = eval(conta);

        if (!conta) {
          alert("Conta Inválida");
          return;
        }

        this.display.value = String(conta);
      } catch (error) {
        alert("Conta Inválida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
          el.blur();
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
          el.blur();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
          el.blur();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
          el.blur();
        }

      });
    },

    pressionaEnter() {
      document.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();

calculadora.inicia();
