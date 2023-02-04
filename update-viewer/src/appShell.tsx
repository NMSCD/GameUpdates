import { Route, Routes } from "@solidjs/router";
import { Component, lazy, Suspense } from 'solid-js';
import { Header } from './components/common/header';
import { CenterLoading } from './components/core/loading';
import { routes } from './constants/route';

const HomePage = lazy(() => import("./pages/home"));
const AboutPage = lazy(() => import("./pages/about"));

export const AppShell: Component = () => {
  return (
    <div id="wrapper">
      <Header />
      <Suspense
        fallback={<CenterLoading />}
      >
        <Routes>
          <Route path={routes.home} component={HomePage} />
          <Route path={routes.about} component={AboutPage} />
        </Routes>

        {/* <Footer /> */}
      </Suspense>
    </div>
  );
};
