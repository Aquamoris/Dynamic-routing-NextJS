import React from 'react';
import style from '@/styles/PostPage.module.css';
import Link from "next/link";
import CommentItem from "@/components/CommentItem";

function PostPage(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.post}>
                <h3>
                    {props.post.title}
                </h3>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className={style.comments}>
                <div>
                    {props.comments.map(e => (
                        <CommentItem key={e.id} name={e.name} body={e.body} email={e.email} />
                    ))}
                </div>
            </div>
            <Link href={'/'}>
                <button className={style.button}>
                    Back
                </button>
            </Link>
        </div>
    );
}

export default PostPage;