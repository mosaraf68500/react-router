import { StrictMode, Suspense } from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home/Home.jsx";
import Root from "./components/Root/Root.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Loptop from "./components/Loptop/Loptop.jsx";
import Users from "./components/Users/Users.jsx";
import Posts from "./components/Posts/Posts.jsx";
import Comments from "./components/Comments/Comments.jsx";
import ShowDetail from "./components/Details/ShowDetail.jsx";
import ShowComment from "./components/ShowCommnet/ShowComment.jsx";
// import Users from './components/Users/Users.jsx'
const commentsPromise = fetch(
  "https://jsonplaceholder.typicode.com/comments"
).then((res) => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "laptop",
        Component: Loptop,
      },
      {
        path: "mobiles",
        Component: Mobiles,
      },

      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "comments",
        element: (
          <Suspense fallback={<h1>comments data is loading...</h1>}>
            <Comments commentsPromise={commentsPromise}></Comments>
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        loader: ({ params }) =>  fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          
        
        Component: ShowDetail,
      },
      {
        path:'comments/:commentId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        Component:ShowComment
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
