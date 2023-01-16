import { classCounter, objectCounter } from './Counter';

export function secondInit(): void {
	objectCounter.increment();
	classCounter.increment();
}