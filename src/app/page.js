"use client";
import * as React from 'react';
// import ProductCategories from './modules/views/ProductCategories';
// import ProductSmokingHero from './modules/views/ProductSmokingHero';
// import AppFooter from './modules/views/AppFooter';
// import ProductHero from './modules/views/ProductHero';
// import ProductValues from './modules/views/ProductValues';
// import ProductHowItWorks from './modules/views/ProductHowItWorks';
// import ProductCTA from './modules/views/ProductCTA';
// import AppAppBar from './modules/views/AppAppBar';
import HeadBar from './modules/views/HeadBar'
import withRoot from './modules/withRoot';

function Index() {
  return (
      <React.Fragment>
          <HeadBar />
        {/*<AppAppBar />*/}
        {/*<ProductHero />*/}
        {/*<ProductValues />*/}
        {/*<ProductCategories />*/}
        {/*<ProductHowItWorks />*/}
        {/*<ProductCTA />*/}
        {/*<ProductSmokingHero />*/}
        {/*<AppFooter />*/}
      </React.Fragment>
  );
}

export default withRoot(Index);
