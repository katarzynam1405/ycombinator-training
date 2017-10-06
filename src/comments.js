    import getCommentsApi from './API/commentsAPI';
    import createComment from './comments/comments';

    import './styles/style.scss';

    const store = {}; 

    getCommentsApi().then(createComment).catch(e => console.log(e));

    export default function sendToCommentApi(objectId){
        console.log(objectId);
       getCommentsApi(objectId).then(createComment).catch(e => console.log(e));
    };

    function renderComments(currentComment){
        store.comment = currentComment;
        console.log(currentComment, 'z comments.js!!!!!!');
    }