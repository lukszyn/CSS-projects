let activeElement = 0;

const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1ImgHtml = document.querySelector('.member h1');
const h2ImgHtml = document.querySelector('.member h2');

const colorImages = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const grayImages = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const names = ['Anna Baumgart', 'Marek Feliksiak', 'Arek Pawłowicz'];
const professions = ['programistka JS', 'frontend developer', 'UI designer'];

function changeElement() {
    

    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1ImgHtml.textContent = names[activeElement];
    h2ImgHtml.textContent = professions[activeElement];
    activeElement++;
    if (activeElement == colorImages.length) {
        activeElement = 0;
    }
}


setInterval(changeElement, 4000);

