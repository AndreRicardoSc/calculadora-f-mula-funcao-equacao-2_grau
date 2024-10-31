function exibir() {
    // Obtendo os valores e convertendo para números
    let numX2 = parseFloat(document.getElementById("coA").value);
    let numX = parseFloat(document.getElementById("coB").value);
    let num = parseFloat(document.getElementById("coC").value);

    // Cálculo do delta
    let delta = (numX * numX) - 4 * numX2 * num;
    let raizDelta = Math.sqrt(delta);

    // Cálculo das raízes
    let x1 = (-numX + raizDelta) / (2 * numX2);
    let x2 = (-numX - raizDelta) / (2 * numX2);

    // Cálculo dos vértices
    let numeradorXv = -numX;
    let denominadorXv = 2 * numX2;
    let xVertice = numeradorXv / denominadorXv;
    let numeradorYv = -delta;
    let denominadorYv = 4 * numX2;
    let yVertice = numeradorYv / denominadorYv;

    // Validação dos vértices para exibir frações
    if (!Number.isInteger(xVertice)) {
        xVertice = `${numeradorXv}/${denominadorXv}`;
    }
    if (!Number.isInteger(yVertice)) {
        yVertice = `${numeradorYv}/${denominadorYv}`;
    }

    // Saída dos resultados
    if (delta < 0) {
        document.getElementById("resultado").innerHTML = `
            <h3>Resultados</h3>
            <p>Delta: ${delta}</p>
            <p>Raíz de delta: irreal</p>
            <p>Raíz da equação/função: não possui pois delta é negativo</p>
            <p>Coordenada do vértice: (${xVertice}, ${yVertice})</p>
            <button onclick="limpar()">Limpar Resultados</button>
        `;
    } else {
        document.getElementById("resultado").innerHTML = `
            <h3>Resultados</h3>
            <p>Delta: ${delta}</p>
            <p>Raíz de delta: ${raizDelta}</p>
            <p>Raíz da equação/função: (${x1}, ${x2})</p>
            <p>Coordenada do vértice: (${xVertice}, ${yVertice})</p>
            <button onclick="limpar()">Limpar Resultados</button>
        `;
    }
}

// Função para limpar os resultados
function limpar() {
    document.getElementById("resultado").innerHTML = `
        <h3>Resultados</h3>
        <p>Delta:</p>
        <p>Raíz de delta:</p>
        <p>Raíz da equação/função:</p>
        <p>Coordenada do vértice:</p>
        <button onclick="limpar()">Limpar Resultados</button>
    `;
}
