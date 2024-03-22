import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <div>/browse</div>,
        },
    ]);

    return (
        <div
            className="text-white bg-black 
                    w-screen h-screen"
        >
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default App;
