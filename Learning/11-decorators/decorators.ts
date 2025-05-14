function logger<T extends new (...args: any[]) => any>(
	target: T,
	ctx: ClassDecoratorContext
) {
	console.log('Logger decorator');
	console.log(target);
	console.log(ctx);

	return class extends target {
		constructor(...args: any[]) {
			super(...args);
			console.log('class constructor');
			console.log(this);
		}
	};
}

function autobind(target: (...args: any[]) => any, ctx: ClassMethodDecoratorContext) {
	ctx.addInitializer(function (this: any) {
		this[ctx.name] = this[ctx.name].bind(this);
	});
	return function (this: any) {
		console.log('Executing original fn');
		target.apply(this);
	};
}

function replacer<T>(initValue: T) {
	return function replacerDecorator(
		target: undefined,
		ctx: ClassFieldDecoratorContext
	) {
		console.log(target);
		console.log(ctx);

		return (initialValue: any) => {
			console.log(initialValue);
			return initValue;
		};
	};
}

@logger
class Person {
	@replacer<string>('Walter')
	name = 'Oleg';

	@autobind
	greet() {
		console.log('Hi, I am ' + this.name);
	}
}

const oleg = new Person();

const greet = oleg.greet;
oleg.greet();
greet();
