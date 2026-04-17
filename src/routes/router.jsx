import { createBrowserRouter } from "react-router";
import Rootlayout from "../layout/Rootlayout";
import Hompepage from "../pages/Home/Hompepage";
import Timeline from "../pages/TimeLine/Timeline";
import Stats from "../pages/Stats/Stats";
import NotFoundPage from "../pages/404/NotFoundPage";
import FriendsDetails from "../pages/FriendsDetails/FriendsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Hompepage
      },
      {
        path: "/timeline",
        Component: Timeline
      },
      {
        path: "/stats",
        Component: Stats
      }
      ,{
        path:"/details/:id",
        Component:FriendsDetails,
        loader:()=>fetch("/Friends.json")
      }
,  {

    path:"*",
    Component:NotFoundPage
  }
    ]
  },
]);
