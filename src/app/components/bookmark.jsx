import React from "react";

const BookMark = ({onFavourite}) => {
    let fav = 0
    if(onFavourite()){fav++}
    return <i className={"bi bi-bookmark"+(fav?"-heart-fill":"")}></i>
}

export default BookMark
// <i class="bi bi-bookmark    -heart-fill"></i>