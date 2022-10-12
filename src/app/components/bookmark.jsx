import React from "react";

const BookMark = ({onFavourite, status, id}) => {
    return  <button onClick={()=>onFavourite(id)}>
                <i className={"bi bi-bookmark"+(status?"-heart-fill":"")}></i>
            </button>
}

export default BookMark