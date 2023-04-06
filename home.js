var cartItems=[];
var isTotalHidden=true;
var fr={
	name:"fr",
	price:50000,

}
var sofa={
	name: "sofa",
	price: 40000,

}
var air={
	name:"air",
	price:60000,

}
var bed={
	name:"bed",
	price:30000,

}
var ch={
	name: "ch",
	price: 5000,

}
var dt={
	name:"dt",
	price:10000,

}
var dit={
	name: "dit",
	price: 20000,

}
var st={
	name:"st",
	price:7000,

}
var wd={
	name: "wd",
	price: 10000,

}
var cup={
	name:"cup",
	price:6000,

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




