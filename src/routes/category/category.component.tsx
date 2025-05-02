import { useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';

import ProductCard from '../../components/product-card/product-card.component'
import Spinner from '../../components/spinner/spinner.componenet';
import { CategoryContainer, CategoryTitle, CategoryMainContainer } from './category.styles'

type CategoryRouteParams = {
    category: string;
}

const Category = () => {
    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <CategoryMainContainer>
            <CategoryTitle>{category}</CategoryTitle>
            {isLoading ? <Spinner /> : (
            <CategoryContainer>
                {
                    products && products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </CategoryContainer>
            )}
        </CategoryMainContainer>
    )
}

export default Category;
