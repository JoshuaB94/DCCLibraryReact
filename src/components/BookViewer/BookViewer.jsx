import React from "react";
import Book from "../Book/Book";

const BookViewer = (props) => {
    return (  
        <div className="row row-space">
            <div className="col-md-4">
                {/*Previous Button will go here*/}
                <button onClick={props.previousBook}>Previous Book</button>
            </div>
            <div className="col-md-4">
                {/*Display Book cover here*/}
                <Book book={props.book} />
            </div>
            <div className="col-md-4">
                {/*Next Button will go here*/}
                <button onClick={props.nextBook}>Next Book</button>
            </div>
        </div>
    );
}
 
export default BookViewer;