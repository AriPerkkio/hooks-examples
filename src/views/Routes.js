import { lazy } from 'react';

import Main from './Main';

export default [
    {
        navigationName: 'useState',
        path: '/local-state',
        component: lazy(() => import('./LocalStateView')),
    },
    {
        navigationName: 'useReducer',
        path: '/use-reducer',
        component: lazy(() => import('./ReducerView')),
    },
    {
        navigationName: 'setState: Merge vs replace',
        path: '/merge-vs-replace',
        component: lazy(() => import('./MergeVsReplace')),
    },
    {
        navigationName: 'useEffect',
        path: '/use-effect',
        component: lazy(() => import('./EffectView')),
    },
    {
        navigationName: 'Performance: useMemo, useCallback',
        path: '/performance',
        component: lazy(() => import('./PerformanceView')),
    },
    {
        navigationName: 'Context View',
        path: '/context-view',
        component: lazy(() => import('./ContextView')),
    },
    {
        navigationName: 'Custom Hooks: reusable state logic vs HOC/renderProp',
        path: '/reusable-state-logic',
        component: lazy(() => import('./ReusableStateView')),
    },
    {
        navigationName: 'Custom Hooks: Isolated state management',
        path: '/isolated-state-management',
        component: lazy(() => import('./IsolatedStateView')),
    },
    {
        navigationName: 'Custom Hooks: Unit testing',
        path: '/testing',
        component: lazy(() => import('./TestingView')),
    },
    {
        navigationName: 'Custom Hooks: global state',
        path: '/global-state',
        component: lazy(() => import('./GlobalStateView')),
    },
    {
        navigationName: 'Extra: Custom hook examples',
        path: '/custom-hook-examples',
        component: lazy(() => import('./CustomHookExamplesView')),
    },
    {
        navigationName: 'Main View',
        path: '/*',
        component: Main,
    },
];
