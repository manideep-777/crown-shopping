import { FC } from 'react'
import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'
import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles'
import { CategoryItem } from '../../store/categories/categories.types'

interface CategoryPreviewProps {
    title: string
    products: CategoryItem[]
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
    return (
        <CategoryPreviewContainer >
            <h2>
                <Link to={`/shop/${title}`}>
                    <Title>{title.toUpperCase()}</Title>
                </Link>
            </h2>
            <Preview>
                {products.filter((_, idx) => idx < 4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview

