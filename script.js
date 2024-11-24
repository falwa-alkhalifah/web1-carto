function validateForm() {
    const orderNumber = document.getElementById("orderNumber").value;
    const stars = document.querySelectorAll('.overall-rating .rating .star'); // لتحديد النجوم فقط في الـ overall-rating
    let selectedRating = 0;
// Find the selected rating from active stars
    stars.forEach((star, index) => {
        if (star.classList.contains('active')) { 
            selectedRating = index + 1;
        }
    });

    // Validate order number
    if (!orderNumber) {
        alert("Please select an order number.");
        return false;
    }

    // Validate rating
    if (selectedRating === 0) {
        alert("Please choose a rating score.");
        return false;
    }

    // If valid, show feedback
    alert(`Thank you for your feedback!\nYour Overall rating for ${orderNumber} is ${selectedRating} star(s).`);
    window.location.href = "Home.html"; // Redirect to Home page
}
        function updateOrderDetails() {
            const orderNumber = document.getElementById("orderNumber").value;
            const productContainer = document.getElementById("product-reviews");
            let content = "";
            if (orderNumber === "Order #1"){
                content = ` 
				   <h3> Other Ratings:</h3> 
                    <div class="rate-card">
                        <img src="images/sunglass.jpg" alt="Product Image" class="product-image">
                        <div class="rating">
   
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
        </div>
                   <label for="sunglass-comments">Comments:</label>
                        <textarea id="sunglass-comments" placeholder="Comments"></textarea>
                    </div>
                    <div class="rate-card">
                        <img src="images/shoes.jpg" alt="Product Image" class="product-image">
                        <div class="rating">
                           <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
                        </div>
                        <label for="shoes-comments">Comments:</label>
                        <textarea id="shoes-comments" placeholder="Comments"></textarea>
                    </div>
                `;
            } else if (orderNumber === "Order #2") {
                content = `
				
		<h3>Other Ratings:</h3> 
                    <div class="rate-card">
                        <img src="images/bag.jpg" alt="Product Image" class="product-image">
                        <div class="rating">
                           <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
                        </div>
                        <label for="bag-comments">Comments:</label>
                        <textarea id="bag-comments" placeholder="Comments"></textarea>
                    </div>
                    <div class="rate-card">
                        <img src="images/ring.jpg" alt="Product Image" class="product-image">
                        <div class="rating">
                            <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
                        </div>
                        <label for="ring-comments">Comments:</label>
                        <textarea id="ring-comments" placeholder="Comments"></textarea>
                    </div>
                `;
            } else if (orderNumber === "Order #3") {
                content = `
			
		<h3>Other Ratings:</h3> 
                    <div class="rate-card">
                        <img src="images/teddybear.jpg" alt="Product Image" class="product-image">
                        <div class="rating">
                            <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
                        </div>
                        <label for="teddybear-comments">Comments:</label>
                        <textarea id="teddybear-comments" placeholder="Comments"></textarea>
                    </div>
                    <div class="rate-card">
                        <img src="images/teshert.jpg" alt="Product Image" class="product-image">
                        <div class="rating">
                            <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
                        </div>
                       <div class="review-options">
                    <div class="checkbox">
                        <input type="checkbox" id="color">
                        <label for="color">Different color</label>						
                        <input type="checkbox" id="smell">
                        <label for="smell">Smells bad</label>
                        <input type="checkbox" id="light">
                        <label for="light">Too light</label>					
                        <input type="checkbox" id="cheap">
                        <label for="cheap">Cheap Materials</label>
						<input type="checkbox" id="doesntmatch">
                        <label for="doesntmatch">does not match the picture</label>
                    </div>
				<label for="teshert-comments">Comments:</label>
<textarea id="teshert-comments" placeholder="Comments"></textarea>
                                      <div class="slider-container">
                    <label for ="overall1">Overall Fit:</label>
                    <input type="range" id="overall1"min="1" max="3" value="2">
                    <label for ="comfert1">Comfort:</label>
                    <input type="range" id ="comfert1" min="1" max="3" value="2">
                    <label for="appearance1" >Appearance:</label>
                    <input type="range" id ="appearance1" min="1" max="3" value="2">
                </div>
                </div>
                </div> 
				 <div class="rate-card ">
                <img src="images/pants.jpg" alt="Product Image" class="product-image">
               <div class="rating">
     <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
    <label class="star" onclick="setActiveStar(this)">★</label>
</div>
                <div class="review-options">
                    <div class="checkbox">
                        <input type="checkbox" id="color1">
                        <label for="color1">Different color</label>						
                        <input type="checkbox" id="smell1">
                        <label for="smell1">Smells bad</label>
                        <input type="checkbox" id="light1">
                        <label for="light1">Too light</label>					
                        <input type="checkbox" id="cheap1">
                        <label for="cheap1">Cheap Materials</label>
						<input type="checkbox" id="doesntmatch1">
                        <label for="doesntmatch1">does not match the picture</label>
                    </div>
				<label for="pants-comments">Comments:</label>
               <textarea id="pants-comments" placeholder="Comments"></textarea>
                   <div class="slider-container">
                    <label for ="overall">Overall Fit:</label>
                    <input type="range" id="overall"min="1" max="3" value="2">
                    <label for ="comfert">Comfort:</label>
                    <input type="range" id ="comfert" min="1" max="3" value="2">
                    <label for="appearance" >Appearance:</label>
                    <input type="range" id ="appearance" min="1" max="3" value="2">
                </div>
                </div>
                
                
            </div>
			</div> 
             `;
		   }   productContainer.innerHTML = content;	
		  
}  
	



function setRating(rating) {
    const stars = document.querySelectorAll('.star');      
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');  // Add 'active' class to the selected stars
        } else {
            star.classList.remove('active');  // Remove 'active' class from the non-selected stars
        }
    });
}
function setActiveStar(starElement) {
      if (starElement.classList.contains('active')) {
        starElement.classList.remove('active'); 
      } else {
        starElement.classList.add('active');  
      }
    }
 window.onload = function() {
           
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-theme');
            }
        };


