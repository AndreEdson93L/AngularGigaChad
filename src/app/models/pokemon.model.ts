export interface PokemonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}

export interface Pokemon{
    name: string;
    url: string;
}

//QA
//Should we add null check in our models/interfaces?
