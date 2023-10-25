//state
import useAppContext from "../../../state management/useAppContext"
//react hooks
import { useState, useEffect } from "react"
//router
import { Link, useParams } from 'react-router-dom'

function Pagination() {

    const {state : {results, total}} = useAppContext();

    const [currentPage, setCurrentPage] = useState(1);
    
    const itemsPerPage = 12;

    const pageCount = Math.ceil(total / itemsPerPage);

    const pagesArray = Array.from({ length: pageCount }, (_, index) => index + 1);
    
    const {inputParam, filterParam, artistIdParam, pageParam} = useParams();

    useEffect(() => {
        if(pageParam) {
            setCurrentPage(parseInt(pageParam))
        }
    },[results]);

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
      }, [currentPage]);

    return (
        <nav className="mt-5">
            <ul className='pagination justify-content-center'>
                <li 
                type='button' 
                className={currentPage === 1 ? 'page-item invisible' : 'page-item visible'} >
                    <Link 
                    to={artistIdParam ? `/Music-Search/${artistIdParam}/${itemsPerPage * (currentPage - 2)}/${currentPage -1}` : `/Music-Search/${inputParam}/${filterParam}/${itemsPerPage * (currentPage - 2)}/${currentPage - 1}`}
                    className="page-link">
                        &laquo;
                    </Link>
                </li>
                {pagesArray.slice(currentPage === 1 ? currentPage - 1 : currentPage -2, currentPage === pageCount ? currentPage - 1 : currentPage + 1).map((pageNum) => {
                    return (
                        <li type="button" className='page-item' key={pageNum} >
                            <Link to={artistIdParam ? `/Music-Search/${artistIdParam}/${itemsPerPage * (pageNum - 1)}/${pageNum}` : `/Music-Search/${inputParam}/${filterParam}/${itemsPerPage * (pageNum - 1)}/${pageNum}`}
                            className={(currentPage  ===  pageNum) ? 'page-link active' : 'page-link' }>
                                {pageNum}
                            </Link>
                        </li>
                    )
                })}
                <li 
                type='button' 
                className={currentPage === pageCount ? 'page-item invisible' : 'page-item visible'} 
                onClick={() => setCurrentPage(currentPage + 1)}>
                    <Link 
                    to={artistIdParam ? `/Music-Search/${artistIdParam}/${itemsPerPage * currentPage}/${currentPage + 1}` : `/Music-Search/${inputParam}/${filterParam}/${itemsPerPage * currentPage}/${currentPage + 1}`}
                    className="page-link">
                        &raquo;
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination