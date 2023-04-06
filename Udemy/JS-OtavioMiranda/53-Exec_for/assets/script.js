const elementos = [
    {tag: "p", texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {tag: "div", texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {tag: "section", texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {tag: "footer", texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
]

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i< elementos.length; i++){
    let { tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);