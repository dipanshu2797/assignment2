const fetchData = async () => {
    const response = await fetch("./posts.json");
    const data = await response.json();
    return data.posts;

}


// code execution start only after Dom Load
window.addEventListener('load', async () => {

    const container = document.querySelector('.model--caption');
    const data = await fetchData();
    console.log(data);

    data.forEach((post) => {
        const wrapper = document.createElement('figcaption');
        wrapper.classList.add('model--caption');
        wrapper.innerHTML = `
        <div>
        ${post.title} <br>
        ${post.desc}<br>
         ${post.categor}<br>
         ${post.price}<br>
         ${post.designer}<br>
        </div>
        `
        container.appendChild(wrapper);
        

    })


})
window.addEventListener('load', async () => {

    const container = document.querySelector('.model--caption2');
    const data = await fetchData();
    console.log(data);

    data.forEach((post) => {
        const wrapper = document.createElement('figcaption');
        wrapper.classList.add('model--caption2');
        wrapper.innerHTML = `
        <div>
        ${post.title} <br>
        ${post.desc}<br>
         ${post.categor}<br>
         ${post.price}<br>
         ${post.designer}<br>
        </div>
        `
        container.appendChild(wrapper);
        

    })


})
window.addEventListener('load', async () => {

    const container = document.querySelector('.model--caption5');
    const data = await fetchData();
    console.log(data);

    data.forEach((post) => {
        const wrapper = document.createElement('figcaption');
        wrapper.classList.add('model--caption5');
        wrapper.innerHTML = `
        <div>
        ${post.title} <br>
        ${post.desc}<br>
         ${post.categor}<br>
         ${post.price}<br>
         ${post.designer}<br>
        </div>
        `
        container.appendChild(wrapper);
        

    })


})
window.addEventListener('load', async () => {

    const container = document.querySelector('.model--caption4');
    const data = await fetchData();
    console.log(data);

    data.forEach((post) => {
        const wrapper = document.createElement('figcaption');
        wrapper.classList.add('model--caption4');
        wrapper.innerHTML = `
        <div>
        ${post.title} <br>
        ${post.desc}<br>
         ${post.categor}<br>
         ${post.price}<br>
         ${post.designer}<br>
        </div>
        `
        container.appendChild(wrapper);
        

    })


})



window.addEventListener('load', async () => {

    const container = document.querySelector('.model--caption3');
    const data = await fetchData();
    console.log(data);

    data.forEach((post) => {
        const wrapper = document.createElement('figcaption');
        wrapper.classList.add('model--caption3');
        wrapper.innerHTML = `
        <div>
        ${post.title} <br>
        ${post.desc}<br>
         ${post.categor}<br>
         ${post.price}<br>
         ${post.designer}<br>
        </div>
        `
        container.appendChild(wrapper);
        

    })


})
