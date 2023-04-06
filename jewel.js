var cartItems=[];
var isTotalHidden=true;
var cr={
	name:"cr",
	price:50000,

}
var n1={
	name: "n1",
	price: 40000,

}
var n2={
	name:"n2",
	price:80000,

}
var ear={
	name:"ear",
	price:30000,

}
var n3={
	name: "n3",
	price: 50000,

}
var ring={
	name:"ring",
	price:10000,

}
var e1={
	name: "e1",
	price: 20000,

}
var r1={
	name:"r1",
	price:30000,

}
var e2={
	name: "e2",
	price: 10000,

}
var bang={
	name:"bang",
	price:40000,

}

function addToCart(item){
	cartItems.push(item);

	document.getElementById("itemCounter").innerHTML=cartItems.length;
	console.log(cartItems);
	showTotal();


}
function clickCart(){
	isTotalHidden = !isTotalHidden;
	showTotal();
}

function showTotal(){
	var orderTotal=document.getElementById("orderTotal");
	orderTotal.innerHTML="";


	if(isTotalHidden === false){
		var total=0;
		for (var i = 0; i < cartItems.length; i++) {
			total += cartItems[i].price;
		}
		orderTotal.innerHTML += "Total: Rs." + total;
	}
}




