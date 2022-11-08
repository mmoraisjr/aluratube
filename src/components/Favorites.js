import styled from "styled-components";

export const StyledFavorites = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 16px;
    padding: 16px;
    /* overflow: hidden; */
    width: 100%;

    h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
    }

    a {
        display: flex;
        flex-direction: column;
        padding-right: 25px;
        text-align: center;
        text-decoration: none;
    }

    img {
        border-radius: 50%;
        padding-bottom: 10px;
        width: 120px;
    }

    .account {
        display: flex;
    }

`;