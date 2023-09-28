import React, {useState} from 'react';
import Pagination from "@/components/Pagination";
import {paginate} from "@/utils/paginate";
import style from "@/styles/Posts.module.css"
import PostItem from "@/components/PostItem";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            posts: data
        }
    }
}

const Posts = ({posts}) => {

    const [showPosts, setShowPosts] = useState(posts);
    const [currentPage, setCurrentPage] = useState(1);

    let pageSize = 10;
    let paginatePosts = paginate(showPosts, currentPage, pageSize);

    const postFilter = (e) => {
        if (e.target.value) {
            const find = e.target.value;
            setShowPosts(posts.filter(e => {
                if((e.title).indexOf(find) !== -1) {
                    return e;
                }
            }))
            setCurrentPage(1);
        } else {
            setShowPosts(posts);
        }
    }

    const handlePageChange = page => {
        setCurrentPage(page);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.inputWrapper}>
                <input className={style.input} type="text" onChange={postFilter}/>
            </div>
            <div>
                { paginatePosts.map(({ id, title, body }) => (
                    <PostItem key={id} id={id} title={title} body={body} />
                )) }
            </div>
            <Pagination
                items={posts.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default Posts;