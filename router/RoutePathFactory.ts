export const RoutePathFactory = {
    '/console': () => '/console',
    '/signin': () => '/signin',

    '/labelrUiDemo/[demoName]': (demoName: string) => `/labelrUiDemo/${demoName}`,
} as const;