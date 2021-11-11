/**
 *      Helper Functions
 */

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

const reloadPage = () => {
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = () => {
            window.scrollTo(0, 0);
        }
    }
};

/**
 *      Navbar
 */

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

/**
 *      Events
 */

// Add class 'active' to section when it is near top of viewport
document.addEventListener('scroll', () => {
    makeActive();
});

// Scroll to top of page when user clicks on reload
reloadPage();

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