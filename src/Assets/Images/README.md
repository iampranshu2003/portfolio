# Profile Image

To use your own photo in the Hero section:

1. Add your photo as `profile.jpg` (or `profile.png`) in this folder
2. In `src/Slides/WideScreen/HeroSlide/NameAndJobTitle.js` and `src/Slides/Mobile/HeroSlide/NameAndJobTitle.js`, change the import from:
   ```js
   import profileImage from '../../../Assets/Images/profile-placeholder.svg';
   ```
   to:
   ```js
   import profileImage from '../../../Assets/Images/profile.jpg';
   ```

Recommended: Square image, at least 400×400px, professional headshot.
