const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const soloCategorias= []

for (const movie of movies) {
    for (const category of movie.categories) {
        if (!soloCategorias.includes(category)) {//con esto verifico que no se repita.
            soloCategorias.push(category); // si no se repite, agregar al array
        }
    }
}

console.log(soloCategorias);