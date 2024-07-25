## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### Links

- Solution URL: [Github](https://github.com/EAguayodev/Sunnyside-agency-landing-page/tree/main/sunnyside-agency-landing-page-main)
- Live Site URL: [Vercel](https://sunnyside-agency-landing-page-three-lemon.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS Grid
- Vanilla Javascript
- Desktop-first workflow

### What I learned

- I learned how to use the order property in flexbox to change the order of the boxes when stacking on mobile.
- Learned to display mobile menu and close it by writing only 7 lines of Javascript with the addClass.toggle instead of using if else statement to complete the open and close task for the menu.

```html
<div>
        <picture>
          <source media="(max-width: 900px)" srcset="images/desktop/image-graphic-design.jpg">
          <source media="(max-width: 600px)" srcset="images/mobile/image-graphic-design.jpg">
          <img src="images/desktop/image-graphic-design.jpg" alt="Graphic design">
        </picture>
        <div class="bx5-text">
        
          <h3>Graphic design</h3>
          <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures
            potential
            clients’ attention.</p>
        </div>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const hamburger = document.querySelector('.hamburger-icon');
const menuMobile = document.querySelector('.menu-layout');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hide');
    menuMobile.classList.toggle('menu-mobile');
});
```


### Continued development

Plan to start integrating the use of css frameworks going forward to complete the jr level challenges here on frontendmentor.


### Useful resources

- [MRZ.Code.Manufacture- youtube](MRZ.Code.Manufacture) - The youtube video helped me get some ideas for tackling writing the code for the mobile box display.
- [https://flexbox.malven.co/](https://flexbox.malven.co/) - Used this resource to get an idea for ordering the box stacking on mobile according to the mobile design given. 


## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@EAguayodev]()


## Acknowledgments

Want to give out my acknowledgements to @Walker-90207 for giving me inspiration to change my direction in tackling the sections with the gallery images by putting each image inside two separate div tags inside a section.

