// react
import { 
    FunctionComponent,
} from 'react';

export type TRouteMapperItem = {
    name: string;
    path: string;
    PageComponent: FunctionComponent;
    NavIconComponent?: FunctionComponent;
    childrenMapper?: {
        [subRouteName: string]: TRouteMapperItem;
    };
};
