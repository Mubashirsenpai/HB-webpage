document.addEventListener('DOMContentLoaded', function() {
    // ================ MODAL FUNCTIONALITY ================
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeModals = document.querySelectorAll('.close-modal');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
  
    // Open modals
    loginBtn.addEventListener('click', () => loginModal.style.display = 'flex');
    signupBtn.addEventListener('click', () => signupModal.style.display = 'flex');
  
    // Close modals
    closeModals.forEach(btn => {
      btn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
      });
    });
  
    // Toggle between login/signup
    showSignup.addEventListener('click', (e) => {
      e.preventDefault();
      loginModal.style.display = 'none';
      signupModal.style.display = 'flex';
    });
  
    showLogin.addEventListener('click', (e) => {
      e.preventDefault();
      signupModal.style.display = 'none';
      loginModal.style.display = 'flex';
    });
  
    // Close when clicking outside modal
    window.addEventListener('click', (e) => {
      if (e.target === loginModal) loginModal.style.display = 'none';
      if (e.target === signupModal) signupModal.style.display = 'none';
    });
  
    // ================ PRICE RANGE DISPLAY ================
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
  
    priceRange.addEventListener('input', () => {
      priceValue.textContent = `GHS ${priceRange.value}`;
    });
  
    // ================ FILTER FUNCTIONALITY ================
    const applyFilters = document.getElementById('applyFilters');
    const resetFilters = document.getElementById('resetFilters');
  
    applyFilters.addEventListener('click', () => {
      // Get all selected filters
      const selectedCampus = document.querySelector('input[name="campus"]:checked').value;
      const selectedAmenities = Array.from(document.querySelectorAll('.amenities-grid input:checked'))
        .map(checkbox => checkbox.name);
      const price = priceRange.value;
  
      // In a real app, you would filter hostel data here
      console.log('Applying filters:', {
        campus: selectedCampus,
        amenities: selectedAmenities,
        price
      });
  
      alert('Filters applied! (Check console for details)');
    });
  
    resetFilters.addEventListener('click', () => {
      // Reset all filters
      document.querySelector('input[name="campus"][value="all"]').checked = true;
      document.querySelectorAll('.amenities-grid input').forEach(checkbox => {
        checkbox.checked = false;
      });
      priceRange.value = 800;
      priceValue.textContent = 'GHS 800';
    });
  
    // ================ SORT FUNCTIONALITY ================
    const sortSelect = document.querySelector('.sort-options select');
    sortSelect.addEventListener('change', (e) => {
      console.log('Sorting by:', e.target.value);
      // In a real app, you would sort the hostel data here
    });
  
    // ================ PAGINATION ================
    const pageButtons = document.querySelectorAll('.page-btn');
    pageButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        pageButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // In a real app, you would load the corresponding page here
        console.log('Page changed to:', button.textContent);
      });
    });
  
    // ================ IMAGE GALLERY INTERACTION ================
    // This would handle thumbnail clicks to change main image
    const thumbnails = document.querySelectorAll('.image-thumbnails img');
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        const hostelCard = thumbnail.closest('.hostel-card');
        const mainImage = hostelCard.querySelector('.hostel-images img:first-child');
        // Swap the src (in a real app you might have different images)
        mainImage.src = thumbnail.src;
      });
    });
  
    // ================ FORM VALIDATION ================
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        
        // Basic validation
        if (!email || !password) {
          alert('Please fill in all fields');
          return;
        }
        
        console.log('Login attempt with:', { email, password });
        // In a real app, you would make an API call here
        alert('Login functionality would be implemented here');
        loginModal.style.display = 'none';
      });
    }
  
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = signupForm.querySelector('input[type="text"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;
        const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value;
        const terms = signupForm.querySelector('input[type="checkbox"]').checked;
        
        // Validation
        if (!name || !email || !password || !confirmPassword) {
          alert('Please fill in all fields');
          return;
        }
        
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        
        if (!terms) {
          alert('You must accept the terms of service');
          return;
        }
        
        console.log('Signup attempt with:', { name, email, password });
        // In a real app, you would make an API call here
        alert('Signup functionality would be implemented here');
        signupModal.style.display = 'none';
      });
    }
  });