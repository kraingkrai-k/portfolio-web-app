export enum ROUTES {
    TODO = '/todo',
    JOBS = '/jobs',
    MESSAGES = '/messages'
}

export interface IRoutes {
    name: string
    href: ROUTES
}

export const Routes: IRoutes[] = [
    {name: 'Todo', href: ROUTES.TODO},
    {name: 'Messages', href: ROUTES.MESSAGES},
]