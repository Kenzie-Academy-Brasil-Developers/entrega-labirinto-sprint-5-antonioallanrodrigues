let positionX = 0
let positionY = 0

const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let arrayMap = []

for (let i = 0; i < map.length; i++) {
    let z = map[i].split("")
    arrayMap.push(z);
}


// console.log(arrayMap)

for (let j = 0; j < arrayMap.length; j++) {
    const corpo = document.getElementById('corpo');
    const criarLinha = document.createElement('div');
    criarLinha.id = ("linha" + [j]);
    corpo.appendChild(criarLinha);


}
for (let j = 0; j < 15; j++) {
    let tamanho = arrayMap[j];


    console.log(tamanho.length)
    for (let i = 0; i < 21; i++) {
        let a = arrayMap[j][i];
        if (a === "W") {
            const linha = document.getElementById('linha' + [j]);
            const criarCelula = document.createElement('div');
            criarCelula.className = ("W");
            criarCelula.id = ("W" + [j] + [i]);
            linha.appendChild(criarCelula);

        } else if (a === "S") {
            const linha = document.getElementById('linha' + [j]);
            const criarCelula = document.createElement('div');
            criarCelula.className = ("S");
            criarCelula.id = ("S");
            linha.appendChild(criarCelula);
            const colocarImg = document.createElement('IMG');
            colocarImg.src = "img.png";
            colocarImg.id = "castor";
            criarCelula.appendChild(colocarImg);

        } else if (a === "F") {
            const linha = document.getElementById('linha' + [j]);


            const criarCelula = document.createElement('div');
            criarCelula.className = ("F");
            criarCelula.id = ("C" + [j] + "C" + [i]);
            linha.appendChild(criarCelula);
            // const vaiNoz = document.createElement("IMG");
            // vaiNoz.src = "noz.png";
            // vaiNoz.id = "noz"
            // criarCelula.appendChild(vaiNoz);


        } else {
            const linha = document.getElementById('linha' + [j]);
            const criarCelula = document.createElement('div');
            criarCelula.className = ("C");
            criarCelula.id = ("C" + [j] + "C" + [i]);
            linha.appendChild(criarCelula);
        }

    }

}
let arrayJogador = []
let papi = document.getElementById("S");
let castorzito = papi.lastElementChild;
arrayJogador.push(castorzito)

console.log(arrayJogador)

for (let j = 0; j < 15; j++) {
    let tamanho = arrayMap[j];


    console.log(tamanho.length)
    for (let i = 0; i < 21; i++) {
        let a = arrayMap[j][i].indexOf("S");
        if (a === 0) {
            x = j
            y = i
        }

    }
}

jogador = [x, y]


const a = document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);

    if (keyName === "ArrowUp") {
        let r = jogador[0];
        let e = jogador[1];
        const pai = document.getElementById("castor");
        arrayJogador.push(pai);

        let d = r - 1;
        const novoLugar = document.getElementById("C" + d + "C" + e);
        novoLugar.appendChild(arrayJogador[0]);
        jogador = [d, e];
        arrayJogador = [];
        arrayJogador.push(pai);

    }
    if (keyName === "ArrowDown") {
        let r = jogador[0];
        let e = jogador[1];
        const pai = document.getElementById("castor");
        arrayJogador.push(pai);
        let d = r + 1;
        const novoLugar = document.getElementById("C" + d + "C" + e);
        novoLugar.appendChild(arrayJogador[0]);
        jogador = [d, e];
        arrayJogador = [];
        arrayJogador.push(pai);
        console.log(jogador)
    }
    if (keyName === "ArrowLeft") {
        let r = jogador[0];
        let e = jogador[1];
        const pai = document.getElementById("castor");
        arrayJogador.push(pai);
        let d = e - 1;
        const novoLugar = document.getElementById("C" + r + "C" + d);
        novoLugar.appendChild(arrayJogador[0]);
        jogador = [r, d];
        arrayJogador = [];
        arrayJogador.push(pai);
        console.log(jogador)
    }
    if (keyName === "ArrowRight") {
        let r = jogador[0];
        let e = jogador[1];
        const pai = document.getElementById("castor");
        arrayJogador.push(pai);
        let d = e + 1;
        const novoLugar = document.getElementById("C" + r + "C" + d);
        novoLugar.appendChild(arrayJogador[0]);
        jogador = [r, d];
        arrayJogador = [];
        arrayJogador.push(pai);
        console.log(jogador)
    }
    let m = jogador[0]
    let n = jogador[1]
    if (jogador[0] === 8 && jogador[1] === 20) {
        alert("Você Conseguiu Sair do Labirinto!");

    }

});