import Home from './pages/Home';
import BounceScroll from './pages/BounceScroll';
import BounceScrollWithHorizontalScrollingSection from './pages/BounceScrollWithHorizontalScrollingSection';
import SimplePullToLoadMore from './pages/SimplePullToLoadMore';
import SimplePullToRefresh from './pages/SimplePullToRefresh';
import InfiniteScroll from './pages/InfiniteScroll';

export default {
  '/': Home,
  '/bounce-scroll': BounceScroll,
  '/bounce-scroll-with-horizontal-scrolling-section': BounceScrollWithHorizontalScrollingSection,
  '/simple-pullto-loadmore': SimplePullToLoadMore,
  '/simple-pullto-refresh': SimplePullToRefresh,
  '/infinite-scroll': InfiniteScroll
};
