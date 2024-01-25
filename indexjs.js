const uni = 0;
const urls = [  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d2e7b1dc6df5c03ae40ebbfee920b471',
                'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=d2e7b1dc6df5c03ae40ebbfee920b471',
                'https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=d2e7b1dc6df5c03ae40ebbfee920b471'];
                window.addEventListener('DOMContentLoaded',()=>{
                    const peticiones = urls.map(peticion=>fetch(peticion));
                    Promise.all(peticiones).then(values=>{
                        return Promise.all(values.map(r=>r.json()))
                    }).then(catologos=>{
                        const [catalogoUno,catalogoDos,catalogoTres] = catologos;
                        //catalogo 1
                        const populares = document.getElementById('populares');
                        catalogoUno.results.forEach(pelicula => {
                            const article = document.createElement('article');
                            article.classList.add('pelicula');
                            const img = document.createElement('img');
                            img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
                            article.append(img);
                            populares.append(article);
                        });

                        const estreno = document.getElementById('estreno');
                        catalogoDos.results.forEach(pelicula => {
                            const article = document.createElement('article');
                            article.classList.add('pelicula');
                            const img = document.createElement('img');
                            img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
                            article.append(img);
                            estreno.append(article);
                        });
                        const vistas = document.getElementById('vistas');
                        catalogoTres.results.forEach(pelicula => {
                            const article = document.createElement('article');
                            article.classList.add('pelicula');
                            const img = document.createElement('img');
                            img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
                            article.append(img);
                            vistas.append(article);
                        });
                });
                

            });