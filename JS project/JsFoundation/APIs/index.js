fetch('https://api.openweathermap.org/data/2.5/weather?q=Bangalore,india&APPID=e58491b0b56e02fc09345213ecfc5063', { mode: 'cors' })
    .then(res => {
        res.json().then(data => {
            console.log(data);
        });
    })
    .catch(err => {
        console.log(err);
    });
let img = document.createElement('img');
const getGif = async () => {
    try {
        const res = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=UKFGw1LF2uR1Qytt83Ev8n0fByjo0FuQ&s=cakes', { mode: 'cors' });
        const cake = await res.json();
        console.log(cake);
        img.src = cake.data.images.original.url;
        document.body.appendChild(img);
    } catch (err) {
        console.log('error occured', err);
    }
};
getGif();
