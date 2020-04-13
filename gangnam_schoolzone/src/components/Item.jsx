import React from 'react';
import styled from 'styled-components';

const ItemBlock = styled.div`
    display: flex;
    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

const Item = ({article}) => {
    const { KIND, NM, ADDR, MANAGE_POL, CCTV_NM, SAVE_ROAD_WIDTH } = article;
    return (
        <ItemBlock>
            <div className="contents">
                <h2>
                    { KIND }
                </h2>
                {NM}
                <hr />
                {ADDR}
                <hr />
                {MANAGE_POL}
                <hr />
                CCTV 설치대수 : {CCTV_NM}
                <hr />
                보호구역도로폭 : {SAVE_ROAD_WIDTH}미터
            </div>
        </ItemBlock>
    );
};

export default Item;