type Operations = {
	readonly add: (a: number, b: number) => number;
	readonly substract: (a: number, b: number) => number;
};

type Results<T> = {
	-readonly [Key in keyof T]?: number;
};

let mathOperations: Operations = {
	add(a: number, b: number) {
		return a + b;
	},
	substract(a: number, b: number) {
		return a - b;
	},
};

let MathResults: Results<Operations> = {
	add: mathOperations.add(1, 2),
	substract: mathOperations.substract(10, 2),
};

MathResults.add = 10;
