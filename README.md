# Dynamic Langing Page

As part of Udacity's Front End Developer ***"Nano-Degree"*** program, we are required to make a ***"dynamic landing page"***.

The purpose of this exercise is teach the fundamentals of ***JavaScript*** and also the ***"Document Object Model"***.

# Usage

The project contains 4 sections and also a navigation bar, along with several dynamic helper functions for the user's experience with the interface. 

## Navbar

The ***"navbar"*** is dynamically set to the ***"body"*** with the following function, as shown in this code block : 

```javascript
// create the navbar
const navBarMobile = document.getElementById('mobile__navbar');
const hamburgerMenu = document.querySelector('.span__menu__container');

const navBarMenu = document.querySelector('.navbar__menu');
const navBarList = document.querySelector('#navbar__list');

const navBarListItem_1 = document.createElement('li');
const navBarListItem_2 = document.createElement('li');
const navBarListItem_3 = document.createElement('li');
const navBarListItem_4 = document.createElement('li');

// append to navbar
navBarMenu.append(navBarList);
navBarList.append(navBarListItem_1);
navBarList.append(navBarListItem_2);
navBarList.append(navBarListItem_3);
navBarList.append(navBarListItem_4);
listLinks();
```

## Creating dynamic list items

This function creates dynamic anchor tags that are added to the navbar's list items, it also provides a ***"smooth scrolling"*** effect at certain vertical parts of the page :

```javascript
const listLinks = () => {
    const sections = Array.from(document.getElementsByTagName("section"));

    const navBarListLink_1 = document.createElement('a');
    const navBarListLink_2 = document.createElement('a');
    const navBarListLink_3 = document.createElement('a');
    const navBarListLink_4 = document.createElement('a');

    // Scroll to specific section when user clicks on anchor tag
    navBarListLink_1.addEventListener('click', (e) => {
        e.preventDefault();
        scroll({
            top: 470,
            behavior: "smooth"
        });
    });

    navBarListLink_2.addEventListener('click', (e) => {
        e.preventDefault();
        scroll({
            top: 1045,
            behavior: "smooth"
        });
    });

    navBarListLink_3.addEventListener('click', (e) => {
        e.preventDefault();
        scroll({
            top: 1620,
            behavior: "smooth"
        });
    });

    navBarListLink_4.addEventListener('click', (e) => {
        e.preventDefault();
        scroll({
            top: 2190,
            behavior: "smooth"
        });
    });

    for(section of sections){
        const link = ['#section1', '#section2', '#section3', '#section4'];
        const linkText = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

        navBarListItem_1.appendChild(navBarListLink_1);
        navBarListLink_1.innerHTML = `<a href="${link[0]}">${linkText[0]}</a>`;

        navBarListItem_2.appendChild(navBarListLink_2);
        navBarListLink_2.innerHTML = `<a href="${link[1]}">${linkText[1]}</a>`;

        navBarListItem_3.appendChild(navBarListLink_3);
        navBarListLink_3.innerHTML = `<a href="${link[2]}">${linkText[2]}</a>`;

        navBarListItem_4.appendChild(navBarListLink_4);
        navBarListLink_4.innerHTML = `<a href="${link[3]}">${linkText[3]}</a>`;
    }
};
```

## Reloading the page

If the user chooses to reload the page, the following function will scroll the page back to the top when the user either clicks on ***"refresh or reload"***, depending on their web browser of choice, or when they use the ***"ctrl + R"*** shortcut.

```javascript
const reloadPage = () => {
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = () => {
            window.scrollTo(0, 0);
        }
    }
};
```
## Adding ***"active"*** class to each ***"section"*** tag

This function sets an attribute of an active class that is dynamically applied to each individual section tag, as the user scrolls down the page : 

```javascript
const makeActive = () => {
    // Section 1
    if (window.pageYOffset >= 470) {
        document.getElementsByTagName("section")[0].setAttribute("class", "active");
    } else {
        document.getElementsByTagName("section")[0].removeAttribute("class", "active");
    };

    // Section 2
    if (window.pageYOffset >= 1045) {
        document.getElementsByTagName("section")[0].removeAttribute("class", "active");
        document.getElementsByTagName("section")[1].setAttribute("class", "active");
    } else {
        document.getElementsByTagName("section")[1].removeAttribute("class", "active");
    };

    // Section 3
    if (window.pageYOffset >= 1620) {
        document.getElementsByTagName("section")[1].removeAttribute("class", "active");
        document.getElementsByTagName("section")[2].setAttribute("class", "active");
    } else {
        document.getElementsByTagName("section")[2].removeAttribute("class", "active");
    };

    // Section 4
    if (window.pageYOffset >= 2190) {
        document.getElementsByTagName("section")[2].removeAttribute("class", "active");
        document.getElementsByTagName("section")[3].setAttribute("class", "active");
    } else {
        document.getElementsByTagName("section")[3].removeAttribute("class", "active");
    };
};
```

## Mobile Navigation

When the the width of the page is less than 720px, the navbar becomes mobile

```javascript
// Mobile Navbar
navBarMobile.innerHTML = `
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <div class="overlay-content">
        <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
        <a href="#section3">Section 3</a>
        <a href="#section4">Section 4</a>
    </div>
`;

hamburgerMenu.innerHTML = `
    <span class="span__menu" onclick="openNav()">&#9776;</span>
`;

const openNav = () => {
    document.getElementById("mobile__navbar").style.width = "100%";
}

const closeNav = () => {
    document.getElementById("mobile__navbar").style.width = "0%";
}
```

# MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.