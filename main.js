const slidingSection = document.querySelector('.containeur-second')


window.addEventListener('scroll', ()=>{
    const {scrollTop, clientHeight}=
        document.documentElement;

        const TopElementToTopViewport = slidingSection.getBoundingClientRect().top;
        if(scrollTop >(scrollTop + TopElementToTopViewport).toFixed() - clientHeight * 0.30){
            slidingSection.classList.add('slide-in-active')
        }
})

