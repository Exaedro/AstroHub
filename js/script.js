const fraseh1 = document.getElementById('frase')
const frases = ['Incluso las estrellas más brillantes se queman al final.', 'Todo lo que vemos de las estrellas son sus viejas fotografías.', 'Yo, un universo de átomos, un átomo en el universo.', 'No me sentia como un gigante. Me sentí muy, muy pequeño.']

const separarFrases = frases.map(frase => {
    return frase.split(' ')
})

const aleatorio = separarFrases[Math.floor(Math.random() * frases.length)]
aleatorio.forEach(palabra => {
    let span = document.createElement('span')
    span.className = 'remarcar-palabra'
    span.innerHTML = palabra
    span.style.display = 'inline-block'
    span.style.marginRight = '15px'
    span.style.cursor = 'default'
    fraseh1.appendChild(span)
})
