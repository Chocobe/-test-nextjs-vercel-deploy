// react
import { 
    useMemo,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
import { 
    RouteMapper,
    TRouteMapperKey,
    TRouteMapperItem,
} from '@/router';
import { TLabelrBreadcrumbItem } from '../LabelrBreadcrumb';

const useLabelrBreadcrumbWithRouter = (
    rootBreadcrumbItem?: TLabelrBreadcrumbItem
) => {
    //
    // hook
    //
    const router = useRouter();

    //
    // cache
    //
    const pathNames = useMemo(() => {
        if (!router.isReady) {
            return [];
        }

        const allPathNames = router.route
            .split('/')
            .filter(pathName => pathName) ?? [];

        let dynamicRoutePathNameIndex = allPathNames
            .findIndex(pathName => pathName.match(/^\[.*\]$/));

        dynamicRoutePathNameIndex = dynamicRoutePathNameIndex < 0
            ? allPathNames.length
            : dynamicRoutePathNameIndex;

        return allPathNames.slice(0, dynamicRoutePathNameIndex);
    }, [router]);

    const labelrBreadcrumbItems = useMemo(() => {
        if (!pathNames.length) {
            return [];
        }

        const rootPathName = pathNames[0];
        const subPathNames = pathNames.slice(1);

        const rootItem: TLabelrBreadcrumbItem = rootBreadcrumbItem ?? {
            text: 'Labelr',
            href: '/',
        };
        const subItems = subPathNames.reduce((breadcrumbItems, subPath) => {
            const targetRootMapper = RouteMapper[rootPathName as TRouteMapperKey];
            const targetMapper = targetRootMapper[
                subPath as keyof typeof targetRootMapper
            ] as TRouteMapperItem;

            if (targetMapper) {
                const newItem: TLabelrBreadcrumbItem = {
                    text: targetMapper.name,
                    href: targetMapper.path,
                };

                breadcrumbItems.push(newItem);
            }

            return breadcrumbItems;
        }, [] as TLabelrBreadcrumbItem[]);

        return [
            rootItem,
            ...subItems,
        ];
    }, [pathNames, rootBreadcrumbItem]);

    return {
        labelrBreadcrumbItems,
    };
};

export default useLabelrBreadcrumbWithRouter;
