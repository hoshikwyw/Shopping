import React from 'react'
import CategoryButton from './CategoryButton'

const CategorySection = () => {
    const title = "Product Categories"
    const categories = ["Electronics", "Jewelery", "Men's clothing", "Women's clothing"]
    return (
        <section className=' flex flex-col gap-2'>
            <p className=' text-sm'>{title}</p>
            <div className=' flex gap-3 overflow-scroll noScrollBar'>
                <CategoryButton title={"All"} current={true} />
                {categories.map((category, index) => <CategoryButton key={index} title={category} current={false} />)}
            </div>
        </section>
    )
}

export default CategorySection