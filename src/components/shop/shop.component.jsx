import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../../routes/categories-preview/categories-preview.component'
import Category from '../../routes/category/category.component'


import { ProductsContainer } from "./shop.style"


export default function ShopComponenet() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}
