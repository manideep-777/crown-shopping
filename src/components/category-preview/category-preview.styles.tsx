import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    padding: 0 20px;
`

export const Title = styled.h2`
    font-size: 28px;
    // margin-bottom: 25px;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
`;

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`;