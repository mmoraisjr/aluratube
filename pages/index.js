import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favorites";
import React from "react";

function HomePage() {

    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <CSSReset />
            <div>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline valorDoFiltro={valorDoFiltro} playlists={config.playlists} />
                <Favorites favorites={config.favorites} />
            </div>
        </>
    )
}

export default HomePage

const StyledHeader = styled.div`
    .banner {
        height: 230px;
        object-fit: cover;
        object-position: 0 45%;
        width: 100%;
    }

    .img-user {
        border-radius: 50%;
        height: 160px;
        width: 160px;
    }
    .info-user {
        align-items: center;
        display: flex;
        gap: 16px;
        margin-top: 10px;
        padding: 16px 32px;
        width: 100%;
    }
    
`;
function Header() {
    return (
        <StyledHeader>
            <img className="banner" src={`${config.banner}.png`} />
            <section className="info-user">
                <img className="img-user" src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({ valorDoFiltro, ...props }) {
    const playlistsNames = Object.keys(props.playlists)

    return (
        <StyledTimeline>
            {playlistsNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>
                            {playlistName}
                        </h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalizado = video.title.toLowerCase()
                                const valorDoFiltroNormalizado = valorDoFiltro.toLowerCase()
                                return titleNormalizado.includes(valorDoFiltroNormalizado)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })
                            }
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

function Favorites(props) {
    const favoritesAccounts = Object.keys(props.favorites)

    return (
        <StyledFavorites>
            <div>{
                favoritesAccounts.map((favoriteAccount) => {
                    const accounts = props.favorites[favoriteAccount];
                    return (
                        <section>
                            <h2>
                                {favoriteAccount}
                            </h2>
                            <div className="account">
                                {accounts.map((account) => {
                                    return (
                                        <a href={`https://github.com/${account.perfil}`}>
                                            <img src={`https://github.com/${account.perfil}.png`} />
                                            <span>
                                                {account.perfil}
                                            </span>
                                        </a>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })}
            </div>
        </StyledFavorites>
    )
}