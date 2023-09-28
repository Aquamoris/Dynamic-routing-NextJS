import _ from "lodash";
import style from "../styles/Pagination.module.css"

const Pagination = ({items, pageSize, currentPage, onPageChange}) => {

    const pageCount = items / pageSize;

    if (Math.ceil(pageCount) === 1) return null;

    const pages = _.range(1, pageCount + 1);

    return (
      <nav className={style.wrapper}>
        { pages.map((page) => (
            <div key={page} className={page === currentPage ? `${style.active} + ${style.pageNumber}` : `${style.pageNumber}`}>
                <a href="#" onClick={() => onPageChange(page)}>
                    {page}
                </a>
            </div>
        )) }
      </nav>
    );
}

export default Pagination;