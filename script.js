const fraseh1 = document.getElementById('frase')
const frases = ['Incluso las estrellas más brillantes se queman al final.', 'Todo lo que vemos de las estrellas son sus viejas fotografías.', 'Yo, un universo de átomos, un átomo en el universo.', 'No me sentia como un gigante. Me sentí muy, muy pequeño.']
const aleatorio = frases[Math.floor(Math.random() * frases.length)]

fraseh1.innerHTML = aleatorio;