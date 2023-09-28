import React from 'react';
import PostPage from "@/components/PostPage";

export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const postData = await postResponse.json()

    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    const commentsData = await commentsResponse.json();

    if (!postData || !commentsData) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post: postData,
            comments: commentsData
        }
    }
}

const PostId = ({post, comments}) => {

    if (!post) {
        return <h3>Empty post</h3>
    }

    return (
        <PostPage post={post} comments={comments} />
    );
}

export default PostId;