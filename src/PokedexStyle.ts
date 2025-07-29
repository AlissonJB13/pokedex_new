import styled from "styled-components";

export const PokedexContainer = styled.div`
    display: inline-block;
    margin-top: 2%;
    padding: 15px;
    position: relative;
    
    h1 {
        position: absolute;
        font-weight: 600;
        color: #aaa;
        top: 54.5%;
        right: 27%;
        font-size: clamp(8px, 5vw, 25px);

        /* span.poke_number {
            color: #3a444d;
            text-transform: capitalize
        } */

        span.poke_name {
            color: #3a444d;
            text-transform: capitalize
        }
    }
`
export const PokemonImage = styled.img`
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-63%, 0);
    height: 18%;

`

export const PokemonSearch = styled.form`
    position: absolute;
    width: 65%;
    top: 65%;
    left: 13.5%;

    input {
        width: 100%;
        padding: 4%;
        outline: none;
        border: 2px solid #333;
        border-radius: 5px;
        font-weight: 600;
        color: #3a444d;
        font-size: clamp(8px, 5vw, 25px);
        box-shadow: -3px 4px 0 #888, -5px 7px 0 #333;
    }
`

export const PokemonButtons = styled.div`
    position: absolute;
    bottom: 10%;
    left: 50%;
    width: 65%;
    transform: translate(-57%, 0);
    display: flex;
    gap: 20px;

    button {
        width: 50%;
        padding: 4%;
        border: 2px solid #000;
        border-radius: 5px;
        font-size: clamp(8px, 5vw, 1rem);
        font-weight: 600;
        color: white;
        background-color: #444;
        box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;

        &:active {
            box-shadow: inset -4px 4px 0 #222;
            font-size: 0.9rem;
        }
    }

`

export const PokedexImage = styled.img`
    width: 100%;
    max-width: 425px;
`