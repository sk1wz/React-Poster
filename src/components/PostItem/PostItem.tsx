import React, { memo } from 'react';
import Button from '../ui/Button/Button';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

interface Props{
    id: number;
    title: string;
    description: string;
    remove: Function;

}
const PostItem = (props: Props) => {
    const navigate = useNavigate();
    return (
        <div className="post__item" key={props.id}>
            <div className="left">
                <h5>Уникальный номер: {props.id}</h5>
                <h4>Название: {props.title}</h4>
                <p>Описание: {props.description}</p>
            </div>
            <div className="right">
            <Button onClick={() => navigate(`/post/${props.id}`)}>Открыть пост</Button>
            <Button onClick={() => props.remove(props.id)}>Удалить</Button>
            </div>
      </div>
    );
}

export default memo(PostItem);
