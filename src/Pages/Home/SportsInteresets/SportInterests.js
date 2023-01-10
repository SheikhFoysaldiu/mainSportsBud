import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import InfiniteScroll from 'react-infinite-scroll-component';
import SingleSport from "./SingleSport";
import { API_URL } from "../../../API/config";
import { useInfiniteQuery } from '@tanstack/react-query'
const SportInterests = () => {
  const [sports, setSports] = useState([]);
  const [skip, setSkip] = useState(0);
  const take = 6;
  const apiPath = `${API_URL}/api/v1/sport/sports`

  const fetchSports = async () => {
    const queryParam = "?skip=" + skip + "&take=" + take;
    const url = apiPath + queryParam;
    console.log(url)
    const res = await fetch(url, {
      headers: {
        method: 'GET',
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
    const data = await res.json();

    setSports(sports => [...sports, data.sports]);
    // setSkip(sports.length)
    setSkip(skip + take);
    return data.sports;
  }


  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['sports'],
    queryFn: fetchSports,
    getNextPageParam: (lastPage, pages) => {
      console.log("lastPage:", lastPage)
      console.log("pages:", pages)
      if (lastPage.length < take) {
        return undefined;
      }
      return skip;
    }
  })



  if (!sports) {
    return <Loading></Loading>;
  }
  console.log("sports:", sports)

  return (
    <div className="h-screen w-full overflow-auto lg:overflow-hidden lg:hover:overflow-auto" id="scrollableDiv">
      <InfiniteScroll
        dataLength={sports.length}
        next={fetchNextPage}
        scrollableTarget="scrollableDiv"
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}

      >

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-48 lg:mb-56 mt-16 mx-0 lg:mx-28">
          {
            data &&
            data.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.map((sport) => (
                  <SingleSport key={sport.id} sport={sport}></SingleSport>
                ))}
              </React.Fragment>
            ))}

          {error && <div>Something went wrong ...</div>}
          {isFetchingNextPage
            ? 'Loading more...' : <p style={{ textAlign: "center" }}>
              <b>No more data left!</b>
            </p>}
        </div>

      </InfiniteScroll>

    </div >
    // <>
    //   <button
    //     onClick={() => fetchNextPage()}
    //     id="scrollableDiv"
    //     disabled={!hasNextPage || isFetchingNextPage}
    //   >
    //     {isFetchingNextPage
    //       ? 'Loading more...'
    //       : hasNextPage
    //         ? 'Load More'
    //         : 'Nothing more to load'}
    //   </button>
    //   <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    //   <div className="h-screen w-full overflow-auto lg:overflow-hidden lg:hover:overflow-auto" id="scrollableDiv">

    //     <div className="h-screen w-full overflow-auto lg:overflow-hidden lg:hover:overflow-auto" id="scrollableDiv">

    //       {/* className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-48 lg:mb-56 mt-16 mx-0 lg:mx-28" */}
    //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-48 lg:mb-56 mt-16 mx-0 lg:mx-28">
    //         {
    //           data &&
    //           data.pages.map((page, i) => (
    //             <React.Fragment key={i}>
    //               {page.map((sport) => (
    //                 <SingleSport key={sport.id} sport={sport}></SingleSport>
    //               ))}
    //             </React.Fragment>
    //           ))}
    //       </div>
    //     </div>

    //   </div>

    // </>


  )
}

export default SportInterests;

