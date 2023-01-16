import { classCounter, objectCounter } from './Counter';

export function thirdInit(): void {
	objectCounter.decrement();
	classCounter.decrement();
}