// Exemplo de gráfico utilizando Chart.js
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
    datasets: [
      {
        label: "Dados Exemplo",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "rgba(46, 204, 113, 0.2)",
        borderColor: "rgba(46, 204, 113, 1)",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});

// Função para simular conexão com uma API externa
function connectAPI() {
    alert("Conectando à API... Esta é uma simulação.");
  }
  
  // Função para manipular o envio do formulário
  document.getElementById("dataForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const dataName = document.getElementById("dataName").value;
    const dataValue = document.getElementById("dataValue").value;
    const dataDate = document.getElementById("dataDate").value;
  
    alert(`Dado Adicionado: ${dataName}, Valor: ${dataValue}, Data: ${dataDate}`);
    // Aqui você pode implementar o envio dos dados para o servidor ou salvá-los localmente
  });
  
  // Função para manipular o envio das configurações da conta
document.getElementById("accountSettingsForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    alert(`Configurações da conta salvas:\nE-mail: ${email}`);
    // Salve as informações no servidor ou localmente
  });
  
  // Função para exportar dados
  function exportData() {
    alert("Exportando dados para PDF...");
    // Implementação do processo de exportação de dados para PDF
  }
  
  // Função para backup de dados
  function backupData() {
    alert("Realizando backup local...");
    // Implementação do backup local dos dados
  }
  
  // Variável global para o gráfico
let dataChart;

// Função para inicializar o gráfico
function initializeChart(type = 'line') {
  const ctx = document.getElementById('dataChart').getContext('2d');
  dataChart = new Chart(ctx, {
    type: type,
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
      datasets: [{
        label: 'Exemplo de Dados',
        data: [10, 20, 30, 40, 50, 60, 70],
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
        borderColor: 'rgba(52, 152, 219, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      }
    }
  });
}

// Função para atualizar o gráfico
function updateChart() {
  const chartType = document.getElementById('chartType').value;
  const timeRange = document.getElementById('timeRange').value;

  dataChart.destroy(); // Destruir o gráfico antigo
  initializeChart(chartType); // Criar novo gráfico com o tipo selecionado
}

// Função para baixar o gráfico
function downloadChart() {
  const link = document.createElement('a');
  link.href = document.getElementById('dataChart').toDataURL('image/png');
  link.download = 'grafico.png';
  link.click();
}

// Inicializar o gráfico ao carregar a página
initializeChart();
