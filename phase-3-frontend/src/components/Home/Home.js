import Video from '../../videos/Video.mp4'
import NavBar from './NavBar'
const Home = () => {
    return (
        <>
        <div id="home-container">
                <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
                </video>
            <div id='nav-container'>
                <NavBar/>
            </div>
            <div id='title-container' style={{marginTop: '-10px'}}>
                <h1 id='home-title' style={{paddingLeft: '137px', fontFamily: 'Trattatello, fantasy', color: 'red', fontSize: 'larger'}}>Christmas Spotify</h1>
            </div>
        </div>
        </>
    )
}

export default Home
