import { lazy } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'

const Main = lazy(() =>
  import('./main').then((module) => ({ default: module.Main }))
)

const Page = lazy(() =>
  import('./page1').then((module) => ({ default: module.Page }))
)

export const Routing = () => {
  const some = () => <div>Dadas</div>
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/test', element: <Page /> }
        // {
        //   path: '/test',
        //   element: <Courses />,
        //   children: [
        //     { index: true, element: <CoursesIndex /> },
        //     { path: '/courses/:id', element: <Course /> }
        //   ]
        // }
      ]
    },
    {
      path: '/some',
      element: some()
    }
  ]
  return useRoutes(routes)
}
