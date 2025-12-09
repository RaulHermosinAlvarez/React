export function getProfession(setProfession){
    fetch("/data/profesion.json")
        .then(r => r.json())
        .then(data => {
            if(data.length==0) console.error("Unable to load any products");
            else{
                setProfession(data);
            }
        }).catch(error => {
            console.error(error);
        })
}