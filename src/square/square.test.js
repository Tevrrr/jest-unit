/** @format */

const square = require('./square');

describe('square', () => {
    beforeAll(()=>{})// Один раз перед всеми тестами
	test('Корректное значение ', () => {
		expect(square(2)).toBe(4);
	});
	test('Корректное значение ', () => {
		expect(square(2)).toBeLessThan(5); // value < 5
	});
	test('Корректное значение ', () => {
		expect(square(2)).toBeGreaterThan(3); // value > 3
    });
    test('Корректное значение ', () => {
		expect(square(2)).not.toBeUndefined(); // value !== undefined
    });
    test('---', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(2);
		expect(spyMathPow).toBeCalledTimes(1); // Проверка 1 вызова Math.pow
	})
    test('---', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(1);
		expect(spyMathPow).toBeCalledTimes(0); // Проверка 0 вызовов Math.pow
	});
    afterEach(() => {
		//Удалить из БД
		jest.clearAllMocks(); // Очистка моков иначе проверка на 0 Math.pow даст ошибку
	})
    afterAll(()=>{})
});
