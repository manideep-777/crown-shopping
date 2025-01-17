import CategoryItem  from '../category-item/category-item.component'
import './directory.styles.scss'

export default function Directory({categories}) {
  return (
    <div className="categories-container">
    {categories.map((category) => {
      return (
        <CategoryItem key={category.id} category={category} />
      )
    })}
  </div>
  )
}
