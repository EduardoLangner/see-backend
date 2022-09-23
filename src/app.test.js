// TESTE de integração
// Teste de integração é um teste que testa a integração entre os componentes de um sistema.

const request = require('supertest')
const app = require('../src/app')

describe('testando meu app', () => {
    
    it('testando rota /', async () => {
        const response = await request(app).get('/')
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('message')
        console.log(response)
    })
    
    it('testando rota /generos', async () => {
        const response = await request(app).get('/generos')
        expect(response.status).toBe(200)
        expect(typeof response.body).toBe('object')
        console.log(response)
    })

    it('testando rota /filmes', async () => {
        const response = await request(app).get('/filmes')
        expect(response.status).toBe(200)
        expect(typeof response.body).toBe('object')
        console.log(response)
    })

    it('testando rota /series', async () => {
        const response = await request(app).get('/series')
        expect(response.status).toBe(200)
        expect(typeof response.body).toBe('object')
        console.log(response)
    })

    it('testando rota /episodios', async () => {
        const response = await request(app).get('/episodios')
        expect(response.status).toBe(200)
        expect(typeof response.body).toBe('object')
        console.log(response)
    })
})
