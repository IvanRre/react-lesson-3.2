import React from "react";

const BookMark = ({onFavourite}) => {
    // console.log(id)
    // let fav = 0
    // if(fav === 0){fav++}
    return <i className={"bi bi-bookmark"+(fav?"-heart-fill":"")}></i>
}

export default BookMark
// <i class="bi bi-bookmark    -heart-fill"></i>