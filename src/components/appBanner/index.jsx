import Banner1 from './component/banner1';
import Slider from 'react-slick';

import './css/index.scss';

const AppBaner = () => {
    return (
        <div className='app-banner'>
            <div className='app-banner__content '>
                <Banner1 />
            </div>
        </div>
    )
}

export default AppBaner;