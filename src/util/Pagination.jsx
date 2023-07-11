import React from 'react'
// import { useState } from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ pageCount, changePage }) => {

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                previousLabel={<i className="mdi mdi-chevron-left"></i>}
                nextLabel={<i className="mdi mdi-chevron-right"></i>}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination pagination-rounded justify-content-end mt-3 mb-0"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default Pagination