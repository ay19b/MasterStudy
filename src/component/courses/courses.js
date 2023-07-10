import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import {AiOutlineHeart} from "react-icons/ai"
import {HiOutlineUsers,HiOutlineEye} from "react-icons/hi"
import { New,Old,Overall} from './data';
import "./courses.css"
import { useInfiniteQuery } from 'react-query';
import Skeleton from '@mui/material/Skeleton';


const fetchCourses = async (key, nextCursor = 0) => {
  const pageSize = 8;
  const data = key === 'New' ? New : key === 'Old' ? Old : Overall;

  const start = nextCursor * pageSize;
  const end = start + pageSize;
  const courses = data.slice(start, end);

  return {
    courses,
    nextPageCursor: nextCursor + 1,
    hasMore: end < data.length,
  };
};


export default function Courses() {
  const [item, setItem] = useState('New');
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage,isFetching ,error } = useInfiniteQuery(
    ['courses', item],
    ({ pageParam }) => fetchCourses(item, pageParam),
    {
      getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.nextPageCursor : undefined),
      cacheTime:2000,
      staleTime:6000,
      keepPreviousData: true
    }
  );


  const coursesData = data?.pages.flatMap((page) => page.courses) || [];


  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleButtonClick = (value) => {
    setItem(value);
  };

  return (
    <div className='courses'>
      <div className='container'>
        <div className='head-courses'>
          <h1>Top Courses</h1>
          <div className='btns'>
            <button 
              onClick={() => handleButtonClick('New')}
              className={item === 'New' ? 'active' : ''}
            >
            Newest
            </button>
            <button 
              onClick={() => handleButtonClick('Old')} 
              className={item === 'Old' ? 'active' : ''}
            >
              Oldest
            </button>
            <button 
             onClick={() => handleButtonClick('Overall')}
             className={item === 'Overall' ? 'active' : ''}
            >
              Overall Rating
            </button>
          </div>
        </div>
          <div className={isFetching ? 'list-course active' : 'list-course'}>
            {!isFetching ? (
              coursesData?.map((item, id) => {
                return (
                  <div className='course' key={id}>
                    <img alt={item.img} src={item.img} />
                    <div className='overlay'></div>
                    <div className='course-content'>
                      <div className='info-course'>
                        <h4>{item.type}</h4>
                        <h3>Basics of MasterStudy Education Theme</h3>
                        <span className='free'>Free</span>
                        <div className='detail-course'>
                          <p>
                             MasterStudy is the best choice for everyone! Masterstudy LMS is a feature-rich WP product f..
                           </p>
                          <div className='rating'>
                            <Rating name='read-only' value={4} readOnly className='iconRating' />
                            <AiOutlineHeart className='svg' />
                          </div>
                          <div className='viewes'>
                            <div className='view'>
                               <HiOutlineUsers />
                              <h6>1815</h6>
                            </div>
                            <div className='view'>
                              <HiOutlineEye />
                              <h6>288515</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
               })
            ) : (
               <Skeleton variant='rectangular' className='course' />
             )}
          </div>
          {hasNextPage && (
           <button className='more' onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
             {isFetchingNextPage ? 'Loading more...' : 'Load More'}
           </button>
          )}
      </div>
    </div>
  )
}
