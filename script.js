function validateForm() {
  
    const stars = document.querySelectorAll('.overall-rating .rating .star'); // لتحديد النجوم فقط في الـ overall-rating
    let selectedRating = 0;
	 const comment = document.getElementById('bag-comments').value;
// Find the selected rating from active stars
    stars.forEach((star, index) => {
        if (star.classList.contains('active')) { 
            selectedRating = index + 1;
        }
    });

   

    // Validate rating
    if (selectedRating === 0) {
        alert("Please choose a rating score.");
        return false;
    }
	if (comment.trim() === "") {
        alert("Please add a comment.");
        return;
    }

    // If valid, show feedback
    alert(`Thank you for your feedback!\nYour Overall rating for your order is ${selectedRating} star(s).`);
    window.location.href = "Home.html"; // Redirect to Home page
}
       
	



function setRating(rating) {
    const stars = document.querySelectorAll('.star');  // Get all star labels
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
        starElement.classList.remove('active'); // إزالة التفعيل
      } else {
        starElement.classList.add('active'); // تفعيل النجمة
      }
    }
 window.onload = function() {
           
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-theme');
            }
        };


 loadPurchasedItems();
 function loadPurchasedItems() {
            const purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || [];
            const itemsContainer = document.getElementById('rating-items');

            if (purchasedItems.length === 0) {
                itemsContainer.innerHTML = '<p>No products to rate.</p>';
                return;
            }
purchasedItems.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('rating-container');
                itemDiv.innerHTML = `
                    <p>${item.name} - ${item.price} SAR</p>

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
                `;
                itemsContainer.appendChild(itemDiv);
            });
        }
