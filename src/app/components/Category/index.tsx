import React, { Fragment, useState } from 'react';
import './index.scss'


const AddCategory = ({category}:{category:Function}) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        setValue( target.value )
    }

    const submit = (e:Event) => {
        e.preventDefault();

        if(value){
            category( (cat:any) => [value,...cat])
            setValue('')
        }
    }

    return (
        <Fragment>
            <form onSubmit={submit as any}>
                <input 
                    className='input is-primary' 
                    type="text" 
                    value={value} 
                    placeholder="Search"
                    onChange={handleSubmit as any}
                />
            </form>
        </Fragment>
    )
}

export default AddCategory;