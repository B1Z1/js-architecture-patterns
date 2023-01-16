import { classCounter, objectCounter } from './Counter';

export function firstInit(): void {
	objectCounter.increment();
	classCounter.increment();
}