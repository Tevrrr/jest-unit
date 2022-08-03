/** @format */

const validateValue = require('./validateValue');

describe('validateValue', () => {
	test('Корректное значение ', () => {
		expect(validateValue(50)).toBe(true);
	});
	test('Меньше корректного', () => {
		expect(validateValue(-50)).toBe(false);
	});
	test('Больше корректного ', () => {
		expect(validateValue(150)).toBe(false);
	});
});
