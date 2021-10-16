// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// hooks
import useAuth from './hooks/useAuth';
// components
import Settings from './minimalComponents/settings';
import RtlLayout from './minimalComponents/RtlLayout';
import ScrollToTop from './minimalComponents/ScrollToTop';
import GoogleAnalytics from './minimalComponents/GoogleAnalytics';
import NotistackProvider from './minimalComponents/NotistackProvider';
import ThemePrimaryColor from './minimalComponents/ThemePrimaryColor';
import ThemeLocalization from './minimalComponents/ThemeLocalization';
import { BaseOptionChartStyle } from './minimalComponents/charts/BaseOptionChart';
import LoadingScreen, { ProgressBarStyle } from './minimalComponents/LoadingScreen';

// ----------------------------------------------------------------------

export default function App() {
  const { isInitialized } = useAuth();

  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <ThemeLocalization>
          <RtlLayout>
            <NotistackProvider>
              <GlobalStyles />
              <ProgressBarStyle />
              <BaseOptionChartStyle />
              <Settings />
              <ScrollToTop />
              <GoogleAnalytics />
              {isInitialized ? <Router /> : <LoadingScreen />}
            </NotistackProvider>
          </RtlLayout>
        </ThemeLocalization>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
