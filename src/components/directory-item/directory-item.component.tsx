import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';
import { Category } from '../../store/categories/categories.types';

interface DirectoryItemProps {
    category: Category;
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
    const { title, imageUrl } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(`/shop/${title.toLowerCase()}`);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage $imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>shop now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
