import React, { useState } from 'react';
import Header from "../../components/app/Header";
import Footer from "../../components/app/Footer"
import styles from "./index.module.css";

// 게시글 데이터 및 카테고리 리스트 데이터 정의
const postList = [
    { id: 1, title: 'Welcome to the Community', author: 'Admin', date: '2024-01-01', category: 'General' },
    { id: 2, title: 'React Tips and Tricks', author: 'JohnDoe', date: '2024-01-05', category: 'React' },
    { id: 3, title: 'How to use CSS Grid', author: 'JaneSmith', date: '2024-01-10', category: 'CSS' },
    { id: 4, title: 'Upcoming Features in JavaScript', author: 'Techie', date: '2024-01-12', category: 'JavaScript' },
    { id: 5, title: 'Best Practices for CSS', author: 'WebDev', date: '2024-01-15', category: 'CSS' },
    { id: 1, title: 'Welcome to the Community', author: 'Admin', date: '2024-01-01', category: 'General' },
    { id: 2, title: 'React Tips and Tricks', author: 'JohnDoe', date: '2024-01-05', category: 'React' },
    { id: 3, title: 'How to use CSS Grid', author: 'JaneSmith', date: '2024-01-10', category: 'CSS' },
    { id: 4, title: 'Upcoming Features in JavaScript', author: 'Techie', date: '2024-01-12', category: 'JavaScript' },
    { id: 5, title: 'Best Practices for CSS', author: 'WebDev', date: '2024-01-15', category: 'CSS' },
];

const categories = ['All', 'General', 'React', 'CSS', 'JavaScript'];

function CommunityPage() {
    const [selectedCategory, setSelectedCategory] = useState('All'); // 선택된 카테고리 상태 관리

    // 선택된 카테고리에 따라 게시글 필터링
    const filteredPosts = selectedCategory === 'All' 
        ? postList 
        : postList.filter(post => post.category === selectedCategory);

    return (
        <>
            <Header />
            <section className={styles.communityBanner}>
                <div className="content-container">
                    <div className="centered-placeholder">
                        <i className="fa-sharp fa-regular fa-cart-shopping"></i>
                    </div>
                </div>
            </section>
            <section className={styles.communityContainer}>
                <div className={styles.sidebar}>
                    <h3>Categories</h3>
                    <ul>
                        {categories.map(category => (
                            <li 
                                key={category} 
                                className={selectedCategory === category ? styles.activeCategory : ''}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.communityList}>
                    {filteredPosts.map(post => (
                        <div key={post.id} className={styles.postItem}>
                            <h3 className={styles.postTitle}>{post.title}</h3>
                            <div className={styles.postMeta}>
                                <span className={styles.postAuthor}>{post.author}</span>
                                <span className={styles.postDate}>{post.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}

export default CommunityPage;
