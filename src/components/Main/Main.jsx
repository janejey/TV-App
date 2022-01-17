import './main.scss';
import Slider from '../Slider/Slider';
import data from '../../data'
import { useReducer } from 'react';
import Play from '../../assets/icons/Play.png'

function Main() {
    const ftr = data.Featured;

    const initialState = {
        img: ftr.CoverImage,
        category: ftr.Category,
        titleImage: ftr.TitleImage,
        description: ftr.Description,
        relaseYear: ftr.ReleaseYear,
        mpaRating: ftr.MpaRating,
        duration: ftr.Duration
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch(action.type) {
            case "multiple":
              return {...state, ...action.payload }
            default:
              throw new Error("Something went wrong!")
          }
    }

    return (
        <div className='main-container' style={{ backgroundImage: `url(${require('../../assets/' + state.img)})` }}>
            <div className='movie-info'>
                <div className='category'>{state.category}</div>
                <div className='title-img'>
                    <img src={require('../../assets/' + state.titleImage)} alt={state.titleImage} />
                </div>
                <div className='year-rate-dur'>
                    <div className='relaseYear'>{state.relaseYear}</div>
                    <div className='mpaRating'>{state.mpaRating}</div>
                    <div className='duration'>{(Math.floor(state.duration / 3600) ? Math.floor(state.duration / 3600) + "h " : "") + Math.floor(state.duration % 3600 / 60) + 'm'}</div>
                </div>
                <div className='description'>{state.description}</div>
                <div className='buttons'>
                    <div className='play'>
                        <img src={Play} alt="play" />
                        Play</div>
                    <div className='more-info'>More Info</div>
                </div>
            </div>
            <div className='slider-container'>
                <p style={{ "color": "white", "fontSize": "25px" }}>Trending Now</p>
                <Slider dispatch={dispatch} />
            </div>
        </div>
    )
}

export default Main;