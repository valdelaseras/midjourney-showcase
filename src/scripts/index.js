const nav = document.getElementsByClassName('nav')[0];
const navBody = nav.getElementsByClassName('nav-body')[0];
const footer = document.getElementsByClassName('footer')[0];

window.onload = () => {
    handleInitialStyles()
}

handleInitialStyles = () => {
    if ( window.innerWidth < 1440 ){
        matchBackgroundColor()
    } else {
        setNavigationChecked();
    }
}

isElementInView = ( element, threshold ) => {
    return element.getBoundingClientRect().top < window.innerHeight - threshold;
}

matchBackgroundColor = () => {
    let backgroundColor;
    let color;
    const sections = document.getElementsByClassName('section');

    for ( let i = 0; i < sections.length; i++ ){
        if ( isElementInView( sections[i], 100 )) {
            backgroundColor = document.defaultView.getComputedStyle(sections[i].querySelector('.text-block'),null)["backgroundColor"];
            color = document.defaultView.getComputedStyle(sections[i].querySelector('.text-block'),null)["color"];
        }
    }

    setStyle( backgroundColor, color );
};

setStyle = ( backgroundColor, color ) => {
    // set background colours
    nav.style.backgroundColor = backgroundColor;
    navBody.style.backgroundColor = backgroundColor;
    footer.style.backgroundColor = backgroundColor;

    // set color
    nav.style.color = color;
    navBody.style.color = color;
    footer.style.color = color;
};

setNavigationChecked = () => {
    if ( window.innerWidth >= 1440 ) {
        document.getElementById('nav-checkbox').checked = true;
    }
};

window.addEventListener('resize', handleInitialStyles);


