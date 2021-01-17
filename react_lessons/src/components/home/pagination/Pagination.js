export const Pagination = ({pages, fetchMovies}) => {
    const prev = "<<";
    const next = ">>";

    const toNext = (cur_page) => {
        if(cur_page !== pages[1]) fetchMovies(cur_page + 1);
    }

    const toPrev = (cur_page) => {
        if(cur_page !== 1) fetchMovies(cur_page - 1);
    }

    return (
        <div className={"pagination"}>
                <button disabled={pages[0] === 1} onClick={() => fetchMovies(1)}>1</button>
                <button disabled={pages[0] === 1} onClick={() => toPrev(pages[0])}>{prev}</button>
                <span>{pages[0]}</span>
                <button disabled={pages[0] === pages[1]} onClick={() => toNext(pages[0])}>{next}</button>
                <button disabled={pages[0] === pages[1]} onClick={() => fetchMovies(pages[1])}>{pages[1]}</button>
        </div>
    )


}
