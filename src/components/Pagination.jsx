import { useState, useEffect } from "react"
//router
import { Link, useParams } from 'react-router-dom'

function Pagination({results , total}) {

    const {inputParam, filterParam, artistIdParam, offsetParam, pageParam} = useParams();
    
    const url = artistIdParam ? `${inputParam}/${filterParam}/${artistIdParam}` : `${inputParam}/${filterParam}`

    const pageNumber = parseInt(pageParam.match(/\d+/)[0])

    const offsetNumber = parseInt(offsetParam.match(/\d+/)[0])

    const [currentPage, setCurrentPage] = useState(pageNumber);
    
    const itemsPerPage = 12;

    const totalPages = Math.ceil(total / itemsPerPage);
    
    const SlicePages = () => {
        const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);
        if (currentPage === 1) {
            return pagesArray.slice(currentPage - 1, currentPage + 3)
        }
        if (currentPage === 2) {
            return pagesArray.slice(currentPage - 2, currentPage + 3)
        }
        if (currentPage === totalPages - 1) {
            return pagesArray.slice(currentPage - 4)
        }
        if (currentPage === totalPages) {
            return pagesArray.slice(currentPage - 3)
        }
        return pagesArray.slice(currentPage - 3, currentPage + 2)
    }
    

    useEffect(() => {
        setCurrentPage(pageNumber)
    },[results]);

    return (
        <nav className="mt-5">
            <ul className='pagination justify-content-center'>
                <li className='page-item'>
                    <Link 
                        to={`/${url}/${offsetNumber - itemsPerPage}/${currentPage - 1}`}
                        className={"page-link " + (currentPage === 1 && 'disabled')}
                    >
                        &laquo;
                    </Link>
                </li>
                {SlicePages().map((pageNum) => {
                    return (
                        <li className='page-item' key={pageNum}>
                            <Link 
                                to={`/${url}/offset=${pageNum * itemsPerPage}/page=${pageNum}`}
                                className={'page-link '+ (currentPage  ===  pageNum && 'active') }
                            >
                                {pageNum}
                            </Link>
                        </li>
                    )
                })}
                <li className='page-item'>
                    <Link 
                        to={`/${url}/offset=${offsetNumber + itemsPerPage}/page=${currentPage + 1}`}
                        className={"page-link " + (currentPage === totalPages && 'disabled')}
                    >
                        &raquo;
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination