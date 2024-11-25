
   function validateForm() {
    const stars = document.querySelectorAll('.overall-rating .rating .star'); 
	const orderNumber = document.getElementById('orderNumber').value.trim();
    let selectedRating = 0;

    stars.forEach((star, index) => {
        if (star.classList.contains('active')) { 
            selectedRating = index + 1;
        }
    });
	if (!orderNumber) {
        alert('Please enter your Order Number.');
        return false;
    }

   

    // Validate rating
    if (selectedRating === 0) {
        alert("Please choose a rating score.");
        return false;
    }
   
		localStorage.removeItem('purchasedItems');
    alert(`Thank you for your feedback!\nYour Overall rating for ${orderNumber }  is ${selectedRating} star(s).`);
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
        itemDiv.classList.add('rate-card');
        itemDiv.innerHTML = `
            <div class="rate-card-header">
                <p><strong>${item.name}</strong> - ${item.price} SAR</p>
            </div>
            <div class="rate-card-image">
                <img src="${item.image}" alt="${item.name}" style="max-width: 100px; max-height: 100px;">
            </div>
            <div class="rating">
                <label class="star" onclick="setActiveStar(this)">★</label>
                <label class="star" onclick="setActiveStar(this)">★</label>
                <label class="star" onclick="setActiveStar(this)">★</label>
                <label class="star" onclick="setActiveStar(this)">★</label>
                <label class="star" onclick="setActiveStar(this)">★</label>
            </div>
            <label for="bag-comments-${index}">Comments:</label>
            <textarea id="bag-comments-${index}" placeholder="Add a comment"></textarea>
        `;
        itemsContainer.appendChild(itemDiv);
    });
}
