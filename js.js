
    let numX2 = document.getElementById("coA").value;
    let numX = document.getElementById("coB").value;
    let num = document.getElementById("coC").value;

    //calculo delta
    let delta = (numX * numX) - 4 * numX2 * num;
    let raizDelta = Math.sqrt(delta);

    //calculo raízes
    let x1 = (-numX + raizDelta) / (2 * numX2);
    let x2 = (-numX - raizDelta) / (2 * numX2);

    //calculo vértices
    let numeradorXv = -numX;
    let denominadorXv = 2 * numX2;
    let xVertice = numeradorXv / denominadorXv;
    let numeradorYv = -delta
    let denominadorYv = 4 * numX2;
    let yVertice = numeradorYv / denominadorYv;

    //validação vértices para fração
    if (Number.isInteger(xVertice) == false) {
        xVertice = `${numeradorXv}/${denominadorXv}`;
        if (Number.isInteger(yVertice) == false) {
            yVertice = `${numeradorYv}/${denominadorYv}`;
        }
    } else if (Number.isInteger(yVertice) == false) {
        yVertice = `${numeradorYv}/${denominadorYv}`;
        if (Number.isInteger(xVertice) == false) {
            xVertice = `${numeradorXv}/${denominadorXv}`;
        }
    } else {
        yVertice = yVertice;
        xVertice = xVertice;
    }
//saída
function exibir() {
    
    if (delta < 0) {
        document.getElementById("resultado").innerHTML = `
            <h3>Resultados</h3>
            <p>Delta: ${delta}</p>
           <p>Raíz de delta: irreal</p>
           <p>Raíz da equação/função: não possui pois delta é negativo</p>
           <p>Coordenada do vértice: (${xVertice}, ${yVertice})</p>
           <button onclick="limpar()">Limpar Resultados</button>
           `
    } else {
        document.getElementById("resultado").innerHTML = `
            <h3>Resultados</h3>
            <p>Delta: ${delta}</p>
           <p>Raíz de delta: ${raizDelta}</p>
           <p>Raíz da equação/função: (${x1}, ${x2})</p>
           <p>Coordenada do vértice: (${xVertice}, ${yVertice})</p>
           <button onclick="limpar()">Limpar Resultados</button>
           `
    }
}
//limpar
function limpar() {
    document.getElementById("resultado").innerHTML = `
        <h3>Resultados</h3>
        <p>Delta:</p>
           <p>Raíz de delta:</p>
           <p>Raíz da equação/função:</p>
           <p>Coordenada do vértice:</p>
           <button onclick="limpar()">Limpar Resultados</button>`
}

//validação da saída
