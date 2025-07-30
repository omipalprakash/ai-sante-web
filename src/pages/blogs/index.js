import React from 'react';
import BlogDetail from './subComponents/blogDetails';
import Recent_Recommend from '@/component/global/recent_recommend';
// import { RECENT_RECOMMEND_SECTION_DATA } from '@/component/global/recent_recommend/constant';
import { BLOGDETAIL_SECTION_DATA } from '@/lib/blogsDetails_constant';
import BackgroundBoxAnimation from '@/component/global/backgroundBoxAnimation/backgroundBoxAnimation';

const index = () => {
  return (
    <>
      {/* <BackgroundBoxAnimation> */}
      <BlogDetail
        title={BLOGDETAIL_SECTION_DATA.title}
        name={BLOGDETAIL_SECTION_DATA.name}
        image={BLOGDETAIL_SECTION_DATA.image}
        blogArray={BLOGDETAIL_SECTION_DATA.blogArray}
        tagArray={BLOGDETAIL_SECTION_DATA.tagArray}
        date={BLOGDETAIL_SECTION_DATA.date}
        description={BLOGDETAIL_SECTION_DATA.description}
      />
      {/* </BackgroundBoxAnimation>    */}
      {/* <Recent_Recommend
        data={RECENT_RECOMMEND_SECTION_DATA}
        title="recent awards"
      /> */}
    </>
  );
};

export default index;
