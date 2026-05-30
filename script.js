// ============================================================
// CONTADOR REGRESSIVO ATÉ O CASAMENTO
// ============================================================

// 🎯 ALTERE AQUI A DATA E HORA DO EVENTO
// Formato: 'YYYY-MM-DDTHH:MM:SS' (ano-mês-diaThora:minuto:segundo)
// Exemplo abaixo: 16 de agosto de 2025 às 15:30
const dataDoEvento = new Date('2026-12-05T15:30:00');

// Função que atualiza o contador
function atualizarContador() {
    const agora = new Date();
    const diferenca = dataDoEvento - agora;

    // Se a data já passou, mostra zeros e para o contador
    if (diferenca <= 0) {
        document.getElementById('dias').textContent = '00';
        document.getElementById('horas').textContent = '00';
        document.getElementById('minutos').textContent = '00';
        document.getElementById('segundos').textContent = '00';
        clearInterval(intervalo);
        return;
    }

    // Cálculos: converte milissegundos em dias, horas, minutos e segundos
    const dias    = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas   = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualiza o HTML (com zero à esquerda quando for menor que 10)
    document.getElementById('dias').textContent     = String(dias).padStart(2, '0');
    document.getElementById('horas').textContent    = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent  = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
}

// Executa a função imediatamente (para não esperar 1 segundo na primeira vez)
atualizarContador();

// Repete a cada 1000 milissegundos (1 segundo)
const intervalo = setInterval(atualizarContador, 1000);