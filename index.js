// Defining express
const express = require('express')
const app = express()
const port = 3000
// Extra path to open server
const path = require('path')
app.set('views',path.join(__dirname, '/views'))
// View engine and public path
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

// Get requests!
app.get('/', (req, res)=>{
    res.render('landingPage.ejs')
})

app.get('/equipo1', (req, res)=>{
    const content = {
        title: 'Equipo 1',
        subtitle: 'Sixth',
        story: 'Un grupo de amigos va a una fiesta en un hotel, pero este está abandonado y nadie más está allí. De a poco, van desapareciendo cada uno de los personajes a manos de un viejo conocido...',
        iframe: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/9w57eAL62bQ?si=BUm_Uhc12OEEIo8f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        actors: ['Fabricio Coledani', 'Ayrton Godoy', 'Celeste Romero', 'Dilan Diaz', 'Alma']
    }
    res.render('equipos.ejs', { content })
})

app.get('/equipo2', (req, res)=>{
    const content = {
        title: 'Equipo 2',
        subtitle: 'Ultimo Suspiro',
        story: 'Cuatro turistas deben quedarse a dormir en un hotel con muy mala pinta. Encuentran una historia de desaparición y son castigados por ello, a excepción de uno, que se encargará de salvarlos.',
        iframe: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/EM-l_DYla-k?si=WOqP9yV01FI3xswC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        actors: ['Ian Butcher', 'Ayrton Godoy', 'Celeste Romero', 'Nereo Soria', 'Ignacio Rodriguez']
    }
    res.render('equipos.ejs', { content })
})


// Listen to port
app.listen(port, ()=>{
    console.log(`Server opened on port ${port}`)
})