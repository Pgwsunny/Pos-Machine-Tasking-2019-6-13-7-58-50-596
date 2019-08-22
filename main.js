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
	
function countProducts(codes){
    let countCodeMap=new Map();
    for(let i=0;i<codes.length;i++){
        if(countCodeMap.has(codes[i])){
            let item=countCodeMap.get(codes[i]);
			item.count++;
            countCodeMap.set(codes[i],item);
        }else{
			let item={
				code:codes[i],
				count:1
			};
			countCodeMap.set(codes[i],item);
        }
    }
	let countCode=[];
	countCodeMap.forEach(function(item){
		countCode.push(item);
	});
	return countCode;
}

function fetchProduct(code){
	
	for(let i=0;i<db.length;i++){
		if(code===db[i].id){
			return {
			name:db[i].name,
			price:db[i].price
			};
		}
		
	}
	
}


function generateReceiptItems(codes){
	
	let result=[];
	let codeCount=countProducts(codes);
	for(let i=0;i<codeCount.length;i++){
		let product=fetchProduct(codeCount[i].code,db);
		let item={
			name:product.name,
			price:product.price,
			count:codeCount[i].count
		};
		result.push(item);
	}
	return result;
}

function countTotalPrice(countTotalPriceInput){
	let totalPrice=0;
	countTotalPriceInput.forEach(item=>{
		totalPrice+=item.count*item.price;
	});
	return totalPrice;
}

function assemble(assembleInput,total){
	let receiptText="Receipts\n-------------------\n";
	assembleInput.forEach(item=>{
		receiptText=receiptText+item.name+"    "+item.count+"    "+item.price+"\n";
	});
	receiptText=receiptText+"-------------------\n"+"Total:"+total;
	return receiptText;
}


function generateReceipt(codes){
	let countTotalPriceInput=generateReceiptItems(codes);
	let total=countTotalPrice(countTotalPriceInput);
	let receiptText=assemble(countTotalPriceInput,total);
	return receiptText;
}

module.exports = {countProducts,fetchProduct,generateReceiptItems,countTotalPrice,assemble,generateReceipt};