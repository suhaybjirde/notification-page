let unread = document.querySelectorAll('.not-read');
let markasread = document.querySelector('.mark-read');
markasread.addEventListener('click', (e)=> {
    e.preventDefault();
    unread.forEach(each => {
        makeItUnRead(each)
    })
})
unread.forEach(each => {
    each.addEventListener('click', (e)=> {
        e.preventDefault();
        makeItUnRead(each)
    })
})

function makeItUnRead(notification) {
    notification.classList.remove('not-read');
    let nfContent = notification.querySelector('.nf-content')
    let dot = notification.querySelector('.nf-content .dot')
    if (dot) nfContent.removeChild(dot)
}