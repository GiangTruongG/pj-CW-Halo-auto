import './index.scss'
import ProductItem from '../../products/ProductItem'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeSection(props) {
    const { list, leftImage, headerText } = props
    const setting = {
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
        arrows: true
    };

    return ( 
        <section className="home__section">
            <div className='home__section__header flex alignItem-center'>
                <i className="fa-solid fa-angles-right"></i>
                <h1>{headerText}</h1>
            </div>
            <div className='home__section__content flex alignItem-start justify-center'>
                <a className='home__section__leftImgage'>
                    <img className='home__section__leftImgage__img' src={leftImage}/>
                </a>
                <div className='home__section__listDemo'>
                    {list.length &&
                        <Slider {...setting}>
                            {list.map(item => <ProductItem data={item} key={item.id}/>)}
                        </Slider>
                    }
                </div>    
            </div>
        </section>
    );
}

export default HomeSection;