import React from 'react';
import style from '../styles/PostItem.module.css';
import Link from "next/link";

const PostItem = (props) => {
    return (
        <div className={style.wrapper}>
            <h3>
                <Link href={`/${props.id}`}>
                    {props.title}
                </Link>
            </h3>
            <div>
                {props.body}
            </div>
        </div>
    );
}

export default PostItem;