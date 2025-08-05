# Coming Soon Landing Page

A vibrant, animated "Coming Soon" landing page designed to engage visitors while they wait for your upcoming product, service, or website launch. This responsive landing page features playful animations, a countdown timer, and a subscription form to capture leads.

## ✨ Features

- **Animated Floating Elements**: Playful balloons, stars, and balls that float around the page with smooth, randomized movements
- **Interactive Book Animation**: An engaging book animation that bursts into confetti, revealing the main content
- **Countdown Timer**: Shows time remaining until launch (30 days from page load) with a subtle glow effect at the start of each minute
- **Waitlist Form**: Email subscription form that appears after the initial animation sequence
- **Mobile-Optimized**: Responsive design that works across all device sizes
- **Performance Optimized**: Smooth animations with reduced motion support and mobile optimizations
- **Interactive Elements**: Hover and touch effects on characters and stars for better user engagement

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling, animations, and responsive design
- **JavaScript**: Interactive elements and animations
- **Bootstrap 5**: Responsive grid and utility classes
- **Google Fonts**: Poppins font family for modern typography

## 🎨 Design Elements

### Color Scheme
- **Primary**: Bright Yellow (#ffe900)
- **Accent**: Teal (#4ecdc4)
- **Navy Blue**: (#1e3a8a)
- **Text**: 
  - Dark Gray (#333) on light backgrounds
  - White (#fff) on dark backgrounds

### Animations
- Floating elements with smooth, randomized movements
- Book burst effect with confetti
- Subtle hover and touch effects on interactive elements
- Mobile-optimized animations with reduced motion support

### Typography
- **Primary Font**: Poppins (300, 400, 600, 700 weights)
- Clean, modern typography with proper hierarchy
- Responsive text sizing

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and up
- **Tablet**: 768px - 991px
- **Mobile**: 320px - 767px
- **Reduced Motion**: Respects user's motion preferences

## �️ Project Structure

```
coming_soon/
├── ComingSoon.html    # Main HTML file
├── script.js         # All JavaScript functionality
├── style.css         # Custom styles and animations
├── images/           # Image assets
│   ├── book.jpg
│   ├── logo.png
│   ├── balloon.png
│   └── ...
└── readme.md         # Project documentation
```

## 📝 Implementation Notes

1. **Waitlist Form**
   - The form is set up to show a success message on submission
   - Backend integration is required for actual email collection
   - Form validation includes basic email format checking

2. **Animations**
   - All animations are optimized for performance
   - Mobile devices receive simplified animations
   - Respects user's motion preferences

3. **Browser Compatibility**
   - Works in all modern browsers
   - Graceful degradation for older browsers
   - Touch-optimized for mobile devices

## 🔧 Customization

### Changing the Countdown Date
Edit the `setupCountdown` function in `script.js` to set your desired launch date:

```javascript
// In script.js
function setupCountdown() {
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 30); // Change 30 to your desired number of days
    // ... rest of the function
}
```

### Updating Colors
Modify the CSS variables in `style.css`:

```css
:root {
    --primary-color: #ffe900;
    --secondary-color: #ffe900;
    --accent-color: #4ecdc4;
    --text-color: #333;
    --light-text: #fff;
    --navy-blue: #1e3a8a;
    /* ... */
}
```# coming-soon-webpage-template
