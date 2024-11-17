import PropTypes from 'prop-types'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
const Book = ({book}) => {
    console.log(book);
    const { bookName,category,image,rating,tags,author} = book;
    return (
        <div className="card bg-base-100 shadow-xl mb-10 cursor-pointer">
            <figure className='bg-base-200 rounded-xl m-10 mb-2 p-5'>
                <img
                    src={image}
                    alt={bookName} className='w-32'/>
            </figure>
            <div className='flex justify-around'>
                {
                    tags.map((tag,index)=><span key={index} className='text-[#23BE0A] font-medium text-sm'>{tag}</span>)
                }
            </div>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">
                    {bookName}
                </h2>
                <p className='text-base text-[#767575] font-medium mb-5'>By : {author}</p>

                <hr/>
                <div className="card-actions justify-between mt-5">
                    <div className="badge text-[#767575] font-sans font-medium">{category}</div>
                    <div className="badge text-[#767575] font-sans font-medium"> <span className='mr-2'>{rating}</span><span><FontAwesomeIcon icon={faStar} /></span></div>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;