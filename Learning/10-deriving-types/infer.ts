function add(a: number, b: number): number {
	return a + b;
}

type AddFn = typeof add;
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;

type AddFnReturnValueType = ReturnValueType<AddFn>; // utility generic type made by myself
type AddFnReturnType = ReturnType<AddFn>; // utility type provided by TypeScript
