import React from 'react';
import { RouteComponentProps } from 'react-router-dom';


interface MatchParams {
    id: string;
}

const Post = ({match}:RouteComponentProps<MatchParams>) => {
    return (
        <div>
            포스트 {match.params.id}
        </div>
    );
};

export default Post;