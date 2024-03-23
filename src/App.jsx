import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/auth/Auth";

function App() {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Auth />,
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
