const {countProducts,fetchProduct,generateReceiptItems,countTotalPrice,assemble,generateReceipt} = require('../main');

it ('should add two numbers', () => {
	const codes=['0001','0002','0001'];
    expect(countProducts(codes)[0].count).toBe(2);
});

it('should fetch one product',()=>{
	const db=[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
	];
	
	const code='0001';
	let result= fetchProduct(code,db);
	expect(result.name).toBe("Coca Cola");
});

it ('should generate receipt', () => {
	const codes=['0001','0002','0001'];
	console.log(generateReceiptItems(codes));
    expect(generateReceiptItems(codes)[0].count).toBe(2);
});

it ('should generate total price', () => {
	const codes=['0001','0002','0001'];
	let countTotalPriceInput=generateReceiptItems(codes);
    expect(countTotalPrice(countTotalPriceInput)).toBe(10);
});

it ('should print receipt', () => {
	const codes=['0001','0002','0001'];
	let countTotalPriceInput=generateReceiptItems(codes);
	let total=countTotalPrice(countTotalPriceInput);
	let receiptText=assemble(countTotalPriceInput,total);
	console.log(receiptText);
    //expect(countTotalPrice(countTotalPriceInput)).toBe(10);
});

it ('should generate receipt', () => {
	const codes=['0001','0002','0001'];
	
	let receiptText=generateReceipt(codes);
	console.log(receiptText);
    //expect(countTotalPrice(countTotalPriceInput)).toBe(10);
});
