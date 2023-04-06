var cartItems=[];
var isTotalHidden=true;
var maxi={
	name:"maxi",
	price:7000,

}
var ps={
	name: "ps",
	price: 8000,

}
var st={
	name:"st",
	price:5000,

}
var leg={
	name:"leg",
	price:6000,

}
var sd={
	name: "sd",
	price: 5000,

}
var suit={
	name:"suit",
	price:10000,

}
var cas={
	name: "cas",
	price: 20000,

}
var t={
	name:"t",
	price:700,

}
var fork={
	name: "fork",
	price: 2000,

}
var cla={
	name:"cla",
	price:3000,

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




