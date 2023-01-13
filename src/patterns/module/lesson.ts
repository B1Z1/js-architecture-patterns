import { add, divide, multiply, substract } from './math';

export function patternModuleLesson(): void {
	console.log('Module pattern lesson');
	console.log('You can encapsulate your code in modules. Look math.ts file.');
	console.log('Add', add(1, 2));
	console.log('Substract', substract(1, 2));
	console.log('Multiply', multiply(1, 2));
	console.log('Divide', divide(1, 2));
}