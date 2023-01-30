let unread = document.querySelectorAll('.not-read');
unread.forEach(each => {
    each.addEventListener('click', (e)=> {
        e.preventDefault();
        each.classList.remove('not-read');
        let nfContent = each.querySelector('.nf-content')
        let dot = each.querySelector('.nf-content .dot')
        if (dot) nfContent.removeChild(dot)
    })
})