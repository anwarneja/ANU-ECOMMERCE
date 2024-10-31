let iconcart=document.querySelector(".icart");
let cart=document.querySelector(".cart");
let checkout=document.querySelector(".checkout");
let close=document.querySelector(".close");
let totalquantity=document.querySelector('.totalquantity');

close.style.display='none';
checkout.style.display="none";
  

let x=0;
iconcart.addEventListener("click",function(){
    if(cart.style.display === "block"){
    
        cart.style.display="none";
        
    }else{
       
        cart.style.display=" block";
        close.style.display = "block";
        checkout.style.display = "block";
     // if(close.style.display === "none" || checkout.style.display === "none"){
    //     close.style.display="block";
    //     checkout.style.display="block";

    // }
    
    }
});
 close.addEventListener("click",()=>{
        cart.style.display="none ";
        // close.style.display = "none"; // Hide close button
        // checkout.style.display = "none"; // Hide checkout button

    });
    let empty=[ ];
    function addToCart(productId, productName, productPrice, productImage){
        // const existingItem=empty.find(function(item){
        //     return item.id === productId});
            const existingItem = empty.find(item => item.id === productId);

            if(existingItem){
                existingItem.quantity += 1;


            }
            else{
                empty.push({
                 id:productId,
                 name: productName,
                 price: productPrice,
                 image: productImage,
                 quantity: 1
                });
            
        }
        x++;
  displayCart();
    }
    function removeFromCart(productId) {
     const itemremove=empty.find(item=>item.id===productId);
     if(itemremove){
        x-=itemremove.quantity;
     }

        empty = empty.filter(item => item.id !== productId);
        displayCart();
    }
    function decreaseItemQuantity(productId) {
        const itemToDecrease = empty.find(item => item.id === productId);
        
        if (itemToDecrease) {
            if (itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1; // Decrease the quantity
                x--; // Decrease total quantity
            } else {
                removeFromCart(productId); // Remove item if quantity is 1
            }
        }
        displayCart();
    }

    function displayCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        
        // Clear cart items
        cartItems.innerHTML = '';
        let total = 0;
        // Display each cart item
        empty.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}" >
                <p>${item.name} - $${item.price} x ${item.quantity}</p>
                 <button class="decrease-btn" data-id="${item.id}">Decrease</button>
                 <button class="delete-btn" data-id="${item.id}">Remove</button>
                 
            `;
            cartItems.appendChild(div);
            
            //  cartItems.style.display="block";
            total += item.price * item.quantity;
        });
        // Update total price
        
        
        cartTotal.textContent = total;
     
     
        totalquantity.textContent=x;
        
        // close.style.display = "block"; 
        // checkout.style.display = "block";

    // Attach delete event listeners
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            removeFromCart(productId);
        //    let k=totalquantity.textContent;
        //    k--;
        //    totalquantity.textContent=k;
        });
    });
      // Attach event listeners to buttons
      document.querySelectorAll('.decrease-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            decreaseItemQuantity(productId);
        });
    });


     
             cartItems.style.display="block";
    }
    document.querySelectorAll('.custom-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const productName = button.getAttribute('data-name');
            const productPrice = button.getAttribute('data-price');
            const productImage = button.getAttribute('data-image');
            
            addToCart(productId, productName, productPrice, productImage);
        });
    });