import { heroes } from "../data/heroes";


export const getByHeroById = ( id ) => {

    return heroes.find( hero => hero.id === id );
}