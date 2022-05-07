// new Date()

// O construtor Date cria um objeto contendo valores como mês, dia,
// horário e mais. A data é baseada no relógio interno do computador.

// const agora = new Date();
// //console.log(agora); // Semana Mês Dia Ano HH:MM:SS GMT

// agora.getDate() //Dia
// agora.getDay() //Dia da semana em número (0 - 6) sendo 0 Domingo
// agora.getMonth() //Número do mês (0 - 11) sendo 0 Janeiro
// agora.getFullYear() //Ano com 4 dígitos
// agora.getHours() //Hora
// agora.getMinutes() //Minutos
// agora.getTime() //milissegundos desde 1970
// agora.getUTCHours()-3 //Brasília
// //ALGUNS EXEMPLOS DO DATE

// // Transformar milissegundos em dias
// function transformarDias(tempo){
//     return tempo / (24 * 60 * 60 * 1000);
//          //tempo em milissegundos
//          //24(número de horas que tem o dia)
//          //60(número de minutos que tem a hora)
//          //60(número de segundos que tem o minuto)
//          //1000(número de millisegundos que tem o minuto)
// }

// const future = new Date('Dec 31 2022 23:59');
// const now = new Date();

// const diasAgora = transformarDias(now);
// const diasFuture = transformarDias(future);

// console.log(Math.floor(diasFuture - diasAgora))

export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.hoje = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.hoje) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
