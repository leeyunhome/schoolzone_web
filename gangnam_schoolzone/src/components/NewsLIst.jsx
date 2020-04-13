import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Item from './Item';
import axios from 'axios';

const NewsListBlock = styled.div`
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

// const sampleArticle = {
//     title: '제목',
//     description: '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // async를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                // const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(
                    `http://openapi.seoul.go.kr:8088/44586f4a7a67747836324a4f636853/json/gangnamChildSaveInfo/1/200/`,
                );
                setArticles(response.data.gangnamChildSaveInfo.row);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }
    // 아직 articles 값이 설정되지 않았을 때
    if (!articles) {
        console.log('null???');
        return null;
    }

    // articles 값이 유효할 때
    return (
        console.log(articles),

        <NewsListBlock>
            {/* <Item article={articles}/> */}
            {articles.map(article => (
                <Item key={article.XCODE + article.YCODE} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;