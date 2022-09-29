const nav = document.getElementsByClassName('nav')[0];
const navBody = nav.getElementsByClassName('nav-body')[0];
const footer = document.getElementsByClassName('footer')[0];

window.onload = () => {
    handleInitialStyles()
}

const options = {
    margin: '0',
    threshold: [0.5, 0.10, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65, 0.70, 0.75, 0.80, 0.85, 0.90, 0.95, 1.0],
};

const observer = new IntersectionObserver( ( sections ) => {
    for ( const section of sections ) {
        if ( section.isIntersecting && section.intersectionRatio >= 0.95 ) {

            const textBlock = section.target.querySelector('.text-block');

            if ( textBlock ) {
                const backgroundColor = document.defaultView.getComputedStyle(textBlock,null)["backgroundColor"];
                const color = document.defaultView.getComputedStyle(textBlock,null)["color"];

                setStyle( backgroundColor, color );
            }
        }
    }
}, options);

handleInitialStyles = () => {
    if ( window.innerWidth < 1440 ){
        Array.from( document.getElementsByClassName( 'section' )).map( section => {
            observer.observe( section );
        });
    } else {
        setNavigationChecked();
    }
}

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


