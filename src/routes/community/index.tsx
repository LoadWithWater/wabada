import React from 'react';
import Header from "../../components/app/Header";
import styles from "./index.module.css";

function CommunityPage() {
    // 가상 게시글 리스트 데이터
    const postList = [
        { id: 1, title: 'Welcome to the Community', author: 'Admin', date: '2024-01-01' },
        { id: 2, title: 'React Tips and Tricks', author: 'JohnDoe', date: '2024-01-05' },
        { id: 3, title: 'How to use CSS Grid', author: 'JaneSmith', date: '2024-01-10' },
        { id: 4, title: 'Upcoming Features in JavaScript', author: 'Techie', date: '2024-01-12' },
        { id: 5, title: 'Best Practices for CSS', author: 'WebDev', date: '2024-01-15' },
        // 게시글 추가 가능
    ];

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
                <div className={styles.communityList}>
                    {/* 게시글 리스트 렌더링 */}
                    {postList.map(post => (
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
        </>
    );
}

export default CommunityPage;
