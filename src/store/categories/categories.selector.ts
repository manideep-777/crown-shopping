import { createSelector } from 'reselect';
import { CategoriesState } from './categories.reducer';
import { CategoriesMap } from './categories.types';
import { RootState } from '../store';

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories): CategoriesMap => {
        const categoriesMap = categories.reduce(
            (acc, { title, items }) => {
                acc[title.toLowerCase()] = items;
        return acc;
      },
      {} as CategoriesMap
    );
    return categoriesMap;
  }
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);

