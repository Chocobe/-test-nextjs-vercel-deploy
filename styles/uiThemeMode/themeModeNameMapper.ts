export const themeModeNameMapper = {
    LIGHT: 'light',
    DARK: 'dark',
} as const;

export type TThemeModeName = typeof themeModeNameMapper[keyof typeof themeModeNameMapper];
