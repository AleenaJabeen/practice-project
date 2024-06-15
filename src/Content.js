import artworld from './artworld.jpg';
import './Content.css';

function Content(){
    return (
        <div className='content'>
            <div className='text'>
                <h1>Artworld</h1>
            </div>
            
            <div className='image'>
                <img src={artworld} alt=""/>
            </div>
        </div>
    );
}
export default Content;