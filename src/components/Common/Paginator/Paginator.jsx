import React from 'react';
import style from './Paginator.module.css';


let Paginator = ({currentPage,onPageChanged,pageSize,totalUsersCount}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => {
                return (
                    <span className={currentPage === p && style.selectedPage}
                        onClick={() => {onPageChanged(p) }}>{p}</span>
                )
            })}
        </div>

    )
}


export default Paginator