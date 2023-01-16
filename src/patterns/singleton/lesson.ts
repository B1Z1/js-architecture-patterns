import { classCounter, objectCounter } from './Counter';
import { firstInit } from './first';
import { secondInit } from './second';
import { thirdInit } from './third';

export function patternSingletonLesson(): void {
	console.log('Singleton pattern lesson');
	console.log('You can create a singleton. Look Counter.ts file.');

	firstInit();
	console.log('Object Counter', objectCounter.getCount());
	console.log('Class Counter', classCounter.getCount());

	secondInit();
	console.log('Object Counter', objectCounter.getCount());
	console.log('Class Counter', classCounter.getCount());

	thirdInit();
	console.log('Object Counter', objectCounter.getCount());
	console.log('Class Counter', classCounter.getCount());

	objectCounter.increment();
	classCounter.increment();
	console.log('Object Counter', objectCounter.getCount());
	console.log('Class Counter', classCounter.getCount());
}