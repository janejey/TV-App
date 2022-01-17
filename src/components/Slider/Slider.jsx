import './slider.scss';
import data from '../../data.json'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider({ dispatch }) {
    let clicked = [];
    let clickedID = [];
    let notClicked = [];
    let trendingNow = data.TrendingNow;
    if (localStorage.getItem('elements')) {
        for (let i = 0; i < trendingNow.length; i++) {
            if (JSON.parse(localStorage.getItem('elements').includes(trendingNow[i].Id))) {
                clickedID.push(String(trendingNow[i].Id))
                clicked.push(trendingNow[i])
            }
        }
    }

    return (
        <OwlCarousel className='owl-theme' margin={10} loop nav={false} dots={false} items={8}>
            {clicked.map(el => {
                return (
                    <div key={el.Id} className='item' onClick={() => {
                        dispatch({
                            type: "multiple", payload: {
                                img: el.CoverImage,
                                category: el.Category,
                                titleImage: el.TitleImage,
                                relaseYear: el.ReleaseYear,
                                mpaRating: el.MpaRating,
                                duration: el.Duration
                            }
                        });
                        if (localStorage.getItem('elements')) {
                            if (!JSON.parse(localStorage.getItem('elements')).includes(el.Id)) {
                                localStorage.setItem('elements', JSON.stringify([...JSON.parse(localStorage.getItem('elements')), el.Id]))
                            }
                        } else {
                            localStorage.setItem('elements', JSON.stringify([el.Id]))
                        }
                    }
                    }>
                        <img src={require('../../assets/' + el.CoverImage)} alt={el.Title} />
                    </div>
                )
            })}

            {trendingNow.filter(el => !clickedID.includes(el.Id)).map(el => {
                return (
                    <div key={el.Id} className='item' onClick={() => {
                        dispatch({
                            type: "multiple", payload: {
                                img: el.CoverImage,
                                category: el.Category,
                                titleImage: el.TitleImage,
                                relaseYear: el.ReleaseYear,
                                mpaRating: el.MpaRating,
                                duration: el.Duration
                            }
                        });
                        if (localStorage.getItem('elements')) {
                            if (!JSON.parse(localStorage.getItem('elements')).includes(el.Id)) {
                                localStorage.setItem('elements', JSON.stringify([...JSON.parse(localStorage.getItem('elements')), el.Id]))
                            }
                        } else {
                            localStorage.setItem('elements', JSON.stringify([el.Id]))
                        }
                    }
                    }>
                        <img src={require('../../assets/' + el.CoverImage)} alt={el.Title} />
                    </div>
                )
            })}
        </OwlCarousel>
    )
}

export default Slider;