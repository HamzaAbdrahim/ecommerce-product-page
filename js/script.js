// target the cart 
const cart  = document.querySelector('.cart > img');
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let many = document.querySelector('.many')
const times = document.querySelector('.items');

plus.addEventListener('click', function (){
    many.innerHTML = parseInt(many.innerHTML) + 1;

    times.innerHTML = many.textContent

    times.classList.add('hi');

    
})

minus.addEventListener('click', function (){
    if (many.innerHTML > 0){

        times.innerHTML = parseInt(many.innerHTML) - 1;

        many.innerHTML = many.innerHTML - 1 
    } else {
        times.classList.remove('hi');
    }
})

const button = document.querySelector('.Add-to-cart');


button.addEventListener('click',addclass)

function addclass() {
    button.classList.add('clicked')
}
const menu = document.querySelector('.cart-menu');

const empty = document.querySelector('.cart-menu p');

cart.addEventListener('click',show);


function show() {
    if (many.textContent > 0 && button.classList.contains('clicked') ) {

        const result = 125.00 * many.textContent;

        empty.classList.add('hidden');

        menu.classList.toggle('show');

        document.querySelector('.cart_box').classList.remove('hidden');

        document.querySelector('.button').classList.remove('hidden');

        document.querySelector('.changed').innerHTML = `$125.00 × ${many.textContent} <span>${'$'+ result.toFixed(2)}</span>`;

    } else {
    menu.classList.toggle('show');

    empty.classList.remove('hidden');

    document.querySelector('.cart_box').classList.add('hidden');

    document.querySelector('.button').classList.add('hidden');

    }

}

window.addEventListener('click',function(ev) {
    if (menu.classList.contains('show')) {
        if (ev.target !== cart){
            menu.classList.remove('show')
        } else {
            return false
        }
    }
})


let humberger  = document.querySelector('.humberger');

let nav  = document.querySelector('.navside');

humberger.addEventListener('click',showlist)

function showlist() {
    nav.classList.add('list');
}

let close_list = document.querySelector('.close-list');

close_list.addEventListener('click' ,function() {
    nav.classList.remove('list');
})


let slider = Array.from(document.querySelectorAll('.slider img'));

let change_img =Array.from(document.querySelectorAll('.change-img img'));


for (let i = 0; i < slider.length;i++){
    slider[i].addEventListener('click' , function () {
        slider.forEach(ele => {
            return ele.classList.contains('youare')?ele.classList.remove('youare'):false;
        })
        slider[i].classList.add("youare");
        change_img.forEach(ele => {
            ele.classList.add('hidden');
        })

        change_img[i].classList.remove('hidden');

    })
}


let gallery  = Array.from(document.querySelectorAll('.galery > img'));
let next  = document.querySelector('.npx .next');
let previous  = document.querySelector('.npx .previous');

next.addEventListener('click',function () {
    const currentIndex = gallery.findIndex(img => img.classList.contains('theOne'));
    gallery[currentIndex].classList.remove('theOne');
    const nextIndex = (currentIndex + 1) % gallery.length;
    gallery[nextIndex].classList.add('theOne');
})

previous.addEventListener('click', function() {
    const currentimg = gallery.findIndex(img => img.classList.contains('theOne'));
    gallery[currentimg].classList.remove('theOne');
    if (currentimg === 0) {
        let previous = gallery.length - 1
        gallery[previous].classList.add('theOne');
    } else {
        const previous = (currentimg - 1) % gallery.length;
        gallery[previous].classList.add('theOne');
    }
})


let light_box = document.querySelector('.light-box');
let light_imges = Array.from(document.querySelectorAll('.change-img-light > img'));
let slider_thumbnail = Array.from(document.querySelectorAll('.slider-thumbnail > img'));
let next_ligth  = document.querySelector('.npx-light .next-light');
let previous_ligth  = document.querySelector('.npx-light .previous-light');

console.log(light_imges);
change_img.forEach(ele => {
    ele.addEventListener('click',function() {
        light_box.classList.remove('hidden')
    })
})

for (let n = 0; n < slider_thumbnail.length;n++){
    slider_thumbnail[n].addEventListener('click' , function () {
        slider_thumbnail.forEach(ele => {
            return ele.classList.contains('youare')?ele.classList.remove('youare'):false;
        })
        slider_thumbnail[n].classList.add("youare");
        light_imges.forEach(ele => {
            ele.classList.add('hidden');
        })
        light_imges[n].classList.remove('hidden');
    })
}


next_ligth.addEventListener('click',function () {
    const cur = light_imges.findIndex(img => img.classList.contains('theOne'));
    light_imges[cur].classList.remove('theOne');
    const nextIndex_light = (cur + 1) % light_imges.length;
    light_imges[nextIndex_light].classList.add('theOne');
    slider_thumbnail.forEach(ele => {
        ele.classList.remove('youare')
    })
    slider_thumbnail[nextIndex_light].classList.add('youare')
})

previous_ligth.addEventListener('click', function() {
    slider_thumbnail.forEach(ele => {
        ele.classList.remove('youare')
    })
    const currentimg_light = light_imges.findIndex(img => img.classList.contains('theOne'));
    light_imges[currentimg_light].classList.remove('theOne');
    if (currentimg_light === 0) {
        let previous_light = light_imges.length - 1
        light_imges[previous_light].classList.add('theOne');
        slider_thumbnail[previous_light].classList.add('youare')
    } else {
        const previous_light = (currentimg_light - 1) % light_imges.length;
        light_imges[previous_light].classList.add('theOne');
        slider_thumbnail[previous_light].classList.add('youare')
    }
})


let close_box = document.querySelector('.light-box-close');

close_box.addEventListener('click',close);

function close() {
    close_box.parentElement.classList.add('hidden');
    console.log('hamza is the best')
}

let checout = document.querySelector('.button');

checout.addEventListener('click',function() {
    document.querySelector('.cart_box').remove()
    times.innerHTML = 0;
    many.innerHTML = 0;
    checout.classList.add('hidden');
    document.querySelector('.Your-Cart').classList.remove('hidden');
    window.location.reload()
})

