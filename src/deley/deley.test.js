const deley = require('./deley')

describe('deley',() => {
    test('Конкретное значение с задержкой', async () => {
        const sum = await deley( () => 5+5, 1000)
        expect(sum).toBe(10)
    });
})