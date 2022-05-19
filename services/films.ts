import axios from "axios";

export const getFilms = (cb: any) => {
    let error: any = null;
    let data: any = [];
    axios.get('https://swapi.dev/api/films')
        .then(d => {
            let localData = d.data.results;
            localData.map((row: any) => {
                data.push({
                    'episode_id': row.episode_id,
                    'title': row.title,
                    'release_date': row.release_date
                });
            });
        })
        .catch(e => {
            error = e;
        })
        .then(() => {
            cb(error, data);
        });
}
