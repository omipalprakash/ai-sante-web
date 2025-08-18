import Meta from '@/component/layout/meta';
import React from 'react';
import { BLOGDETAIL_SECTION_DATA } from '@/lib/blogsDetails_constant';
import BlogDetail from './subComponents/blogDetails';

const index = () => {
    return (
        <>
            <Meta
                title="Blogs | Ai Sante"
                description="Read the latest insights, trends, and strategies transforming the pharmaceutical industry. Explore how AI is revolutionizing pharma marketing, CRM, and stockist operations."
                keywords="AI in pharma, pharma CRM, pharma sales trends, AI healthcare, pharma stockist solutions, pharmaceutical marketing, AI Sante blogs"
            />
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
