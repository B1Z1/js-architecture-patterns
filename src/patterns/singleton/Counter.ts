class Counter {
	private static instance: Counter;

	private static count: number = 0;

	private constructor() {
	}

	static getInstance(): Counter {
		if (!Counter.instance) {
			Counter.instance = new Counter();
		}

		return Counter.instance;
	}

	getCount(): number {
		return Counter.count;
	}

	increment(): void {
		Counter.count++;
	}

	decrement(): void {
		Counter.count--;
	}
}

export const classCounter = Object.freeze(Counter.getInstance());

let objectCount = 0;

export const objectCounter = Object.freeze({
	getCount: () => objectCount,
	increment: () => ++objectCount,
	decrement: () => --objectCount,
});