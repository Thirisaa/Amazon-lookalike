var cartItems=[];
var isTotalHidden=true;
var lap={
	name:"lap",
	price:70000,

}
var tv={
	name: "tv",
	price: 50000,

}
var watch={
	name:"watch",
	price:20000,

}
var headset={
	name:"headset",
	price:10000,

}
var charger={
	name: "charger",
	price: 1000,

}
var power={
	name:"power",
	price:3000,

}
var phone={
	name: "phone",
	price: 90000,

}
var comp={
	name:"comp",
	price:40000,

}
var air={
	name: "air",
	price: 8000,

}
var speaker={
	name:"speaker",
	price:5000,

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




