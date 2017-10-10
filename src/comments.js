    import getCommentsApi from './API/commentsAPI';
    import createComment from './comments/comments';

    import './styles/style.scss';
     getCommentsApi(3730267).then(createComment).catch(e => console.log(e));

    const store = {}; 

    export default function sendToCommentApi(objectID){
        console.log(objectID);
        getCommentsApi(objectID).then(createComment).catch(e => console.log(e));
    };

    function renderComments(currentComments){
        store.comment.hits = currentComments;
        console.log(currentComments, 'z comments.js!!!!!!');
    }