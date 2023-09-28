import React from 'react';
import style from '@/styles/CommentItem.module.css'

function CommentItem(props) {
    return (
        <div className={style.wrapper}>
            <h4>
                {props.name}
            </h4>
            <div>
                {props.body}
            </div>
            <div>
                {props.email}
            </div>
        </div>
    );
}

export default CommentItem;