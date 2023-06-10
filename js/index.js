// Função para formatar um número com zero à esquerda
function formatarNumero(numero) {
    return numero < 10 ? "0" + numero : numero;
  }
  
  // Função para atualizar o contador de dias, horas e minutos
  function atualizarContador(dataInicial) {
    // Data atual
    var dataAtual = new Date();
  
    // Data inicial
    var dataInicial = new Date(dataInicial);
  
    // Calcula a diferença em milissegundos entre as duas datas
    var diferenca = dataAtual - dataInicial;
  
    // Converte a diferença de milissegundos para dias, horas e minutos
    var diasDecorridos = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horasDecorridas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    var minutosDecorridos = Math.floor((diferenca / (1000 * 60)) % 60);
    var segundosDecorridos = Math.floor((diferenca/1000) % 60);
  
    // Atualiza o elemento HTML com o contador de dias, horas e minutos
    document.getElementById("dias").innerHTML = diasDecorridos;
    document.getElementById("numdias").innerHTML = diasDecorridos + " dias me apaixonando por você! ";
    document.getElementById("horas").innerHTML = formatarNumero(horasDecorridas) + " :";
    document.getElementById("minuto").innerHTML = formatarNumero(minutosDecorridos) + " :";
    document.getElementById("segundo").innerHTML = formatarNumero(segundosDecorridos);



  }
  
  // Especifica a data inicial desejada (por exemplo, "2023-01-01 12:00:00")
  var dataInicial = "2019-04-13 20:30:00";
  
  // Chama a função inicialmente para exibir o contador de dias, horas e minutos atual com a data inicial
  atualizarContador(dataInicial);
  
  // Configura um intervalo de atualização para atualizar o contador a cada segundo  + " dias, " + formatarNumero(horasDecorridas) + " horas, " + formatarNumero(minutosDecorridos) + " minutos"
  setInterval(function() {
    atualizarContador(dataInicial);
  }, 1000);
  