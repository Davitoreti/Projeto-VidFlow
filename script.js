<<<<<<< HEAD
const api = fetch("http://localhost:3000/videos")
.then(res => console.log(res.json()))
=======
const containerVideos = document.querySelector('.videos__container');


const api = fetch('http://localhost:3000/videos')
.then(res => res.json())
.then((videos) =>
    videos.forEach((video) => {
        containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem}" alt="Logo do canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                </div>
            </li>
        `
    })

)
>>>>>>> ca82cd4535b3d40e93a342f5533e54eaa2296e89
