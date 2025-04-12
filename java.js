// Initialize hostel data
const hostel = [
  {
      name: "Sample Hostel",
      campus: "tamale",
      amenities: ["toilet", "kitchen"],
      price: 500,
      images: ["image1.jpg"],
      videos: ["video1.mp4"]
  }
  // Add more hostels
];

// Filter functionality
function filterHostels() {
  const selectedAmenities = [...document.querySelectorAll('.amenity:checked')].map(cb => cb.value);
  const selectedCampus = document.getElementById('campusSelect').value;
  
  // Implement filter logic
  console.log("Filters:", {selectedAmenities, selectedCampus});
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.amenity, #campusSelect').forEach(element => {
      element.addEventListener('change', filterHostels);
  });

  // Auth modal handling
  const authModals = {
      login: document.getElementById('loginModal'),
      signup: document.getElementById('signupModal')
  };

  document.getElementById('loginBtn').addEventListener('click', () => {
      authModals.login.style.display = 'block';
  });

  document.getElementById('signupBtn').addEventListener('click', () => {
      authModals.signup.style.display = 'block';
  });
});

// Payment handling
function handlePayment(hostelId) {
  // Payment integration
  console.log("Initiating payment for hostel:", hostelId);
}

const hostels = [
  {
    id: 1,
    name: "Modern Campus Hostel",
    campus: "tamale",
    price: 1200,
    amenities: ["toilet", "bathroom", "bed", "wardrobe", "tiles"],
    distance: "0.5km",
    images: ["hostel1-img1.jpg", "hostel1-img2.jpg"],
    videos: ["hostel1-video.mp4"],
    landlord: "Landlord Name",
    paymentSplit: { platform: 0.15, landlord: 0.85 }
  },
  {
    id: 2,
    name: "Green View Hostel",
    campus: "nyankpala",
    price: 900,
    amenities: ["kitchen", "veranda", "own meter"],
    distance: "1.2km",
    images: ["hostel2-img1.jpg"],
    videos: [],
    landlord: "Another Landlord",
    paymentSplit: { platform: 0.10, landlord: 0.90 }
  }
]; // Added a semicolon here

// Get the forms
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Add event listeners to the forms
loginForm.addEventListener('submit', validateLoginForm);
signupForm.addEventListener('submit', validateSignupForm);

// Validation functions
function validateLoginForm(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username === '' || password === '') {
    alert('Please fill in all fields');
  } else {
    // Send data to server or database
    console.log('Login form submitted');
  }
}

function validateSignupForm(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  
  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all fields');
  } else if (password !== confirmPassword) {
    alert('Passwords do not match');
  } else {
    // Send data to server or database
    console.log('Signup form submitted');
  }
}





