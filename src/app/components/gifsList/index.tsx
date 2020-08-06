import React, {Fragment} from 'react';
import GifItem from '../gifItem'
import './index.scss'
import useFetchGif from '../../hooks/useFetchGif';
import Loader from '../loader'

const GifList = ({category}: {category:string}) => {

    const { data, loading } = useFetchGif(category)

    return (
        <Fragment >
            {
                loading ? <div className="spin "><Loader/></div> :
                <section className="animate__animated animate__fadeIn">
                    <p className='titleCategory'>{category}</p>
                    <div className="test">
                        { data.map((item:any) => 
                            <GifItem 
                                key={item.id}
                                {...item}
                            />
                        )}
                    </div>
                </section>
            }
        </Fragment>
    )

}


export default GifList