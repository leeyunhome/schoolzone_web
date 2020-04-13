import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Item from './Item';
import axios from 'axios';

const ListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const List = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // async를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'http://openapi.seoul.go.kr:8088/44586f4a7a67747836324a4f636853/json/gangnamChildSaveInfo/1/200',
                );
                setArticles(response);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    // 대기 중일 때
    if (loading) {
        return <ListBlock>대기 중...</ListBlock>
    }

    // 아직 gangnamChildSaveInfo 값이 설정되지 않았을 때
    if (!articles) {
        console.log('null?');
        return null;
    }
    // gangnamChildSaveInfo 값이 유효할 때
    return (
        <ListBlock>
            <Item article={articles} />
            {/* {row.map((v) => {
                <Item article={v} />
            })} */}
        </ListBlock>
    );
};

export default List;