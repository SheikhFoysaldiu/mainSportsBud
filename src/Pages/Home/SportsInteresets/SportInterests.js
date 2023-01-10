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
  // const [skip, setSkip] = useState(0);
  const take = 1;
  const apiPath = `${API_URL}/api/v1/sport/sports`

  const fetchSports = async ({ skip = 0 }) => {
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
    getNextPageParam: (params) => console.log(params)
  })



  if (!sports) {
    return <Loading></Loading>;
  }
  console.log("sports:", sports)

  return (
    // <div className="h-screen w-full overflow-auto lg:overflow-hidden lg:hover:overflow-auto" id="scrollableDiv">
    //   <InfiniteScroll dataLength={sports.length}
    //     scrollableTarget="scrollableDiv"
    //     next={fetchSports}
    //     loader={<Loading></Loading>}>
    //     {/* className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-48 lg:mb-56 mt-16 mx-0 lg:mx-28" */}
    //     <div >
    //       {
    //         sports.map(sport => <SingleSport key={sport.id} sport={sport}></SingleSport>)
    //       }
    //     </div>
    //   </InfiniteScroll>
    // </div>
    <>

      <div>
        <button
          onClick={() => fetchNextPage({ skip: 1 })}
          id="scrollableDiv"
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </button>
        <div className="h-screen w-full overflow-auto lg:overflow-hidden lg:hover:overflow-auto" id="scrollableDiv">

          {/* className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-48 lg:mb-56 mt-16 mx-0 lg:mx-28" */}
          <div>
            {
              // sports.map(sport => <SingleSport key={sport.id} sport={sport}></SingleSport>)
            }
          </div>

        </div>

      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>


  )
}

export default SportInterests;

