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

export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const hoje = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(hoje) !== -1;
  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
