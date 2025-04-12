// // Filter functionality
// document.getElementById('applyFilters').addEventListener('click', function() {
//     const priceRange = document.getElementById('priceRange').value;
//     const selectedCampus = document.querySelector('input[name="campus"]:checked').value;
//     const checkedAmenities = [...document.querySelectorAll('.amenity:checked')].map(el => el.value);
  
//     document.querySelectorAll('.hostel-card').forEach(card => {
//       const cardPrice = parseInt(card.querySelector('.price').textContent.match(/\d+/)[0];
//       const cardCampus = card.dataset.campus;
//       const cardAmenities = card.dataset.amenities.split(',');
      
//       const priceMatch = cardPrice <= priceRange;
//       const campusMatch = selectedCampus === 'all' || cardCampus === selectedCampus;
//       const amenitiesMatch = checkedAmenities.every(amenity => cardAmenities.includes(amenity));
      
//       card.style.display = (priceMatch && campusMatch && amenitiesMatch) ? 'block' : 'none';
//     });
//   });


document.getElementById('applyFilters').addEventListener('click', function() {
  try {
      // Get filter values with fallbacks
      const priceRange = parseInt(document.getElementById('priceRange').value) || Infinity;
      const selectedCampus = document.querySelector('input[name="campus"]:checked')?.value || 'all';
      const checkedAmenities = [...document.querySelectorAll('.amenity:checked')].map(el => el.value);
      
      // Get all hostel cards once
      const hostelCards = document.querySelectorAll('.hostel-card');
      
      // If no filters are selected, show all
      if (priceRange === Infinity && selectedCampus === 'all' && checkedAmenities.length === 0) {
          hostelCards.forEach(card => card.style.display = 'block');
          return;
      }
      
      // Filter each card
      hostelCards.forEach(card => {
          try {
              // Get card data with proper error handling
              const priceElement = card.querySelector('.price');
              if (!priceElement) {
                  console.warn('Price element not found in card', card);
                  card.style.display = 'none';
                  return;
              }
              
              // Better price parsing (handles currency symbols and decimals)
              const cardPrice = parseFloat(priceElement.textContent.replace(/[^\d.]/g, '')) || 0;
              const cardCampus = card.dataset.campus || '';
              const cardAmenities = (card.dataset.amenities || '').split(',').filter(Boolean);
              
              // Apply filters
              const priceMatch = cardPrice <= priceRange;
              const campusMatch = selectedCampus === 'all' || cardCampus === selectedCampus;
              const amenitiesMatch = checkedAmenities.length === 0 || 
                                   checkedAmenities.every(amenity => cardAmenities.includes(amenity));
              
              card.style.display = (priceMatch && campusMatch && amenitiesMatch) ? 'block' : 'none';
          } catch (error) {
              console.error('Error processing card:', card, error);
              card.style.display = 'none';
          }
      });
  } catch (error) {
      console.error('Filter error:', error);
      // Fallback: show all cards if filtering fails
      document.querySelectorAll('.hostel-card').forEach(card => card.style.display = 'block');
  }
});