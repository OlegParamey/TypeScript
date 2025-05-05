// Define a type `Product`:

// type Product = {
// 	id: number;
// 	title: string;
// 	tags: string[];
// 	category: { name: string; id: number };
// };

// Then create a variable `product` of this type and assign it a value.

type Product = {
	id: number;
	title: string;
	tags: string[];
	category: { name: string; id: number };
};

const product: Product = {
	id: 1,
	title: 'Apple',
	tags: ['Sour', 'Sweet', 'Green'],
	category: { name: 'Fruit', id: 121 },
};
