import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import IndexPage from "./routes";
import MerchPage from "./routes/merch";
import LoginPage from "./routes/login";
import CommunityPage from "./routes/community";

const router = createBrowserRouter([
	{
		path: "/",
		element: <IndexPage/>,
	},
	{
		path: "/merch",
		element: <MerchPage/>,
	},
	{
		path: "/login",
		element: <LoginPage/>,
	},
	{
		path: "/community",
		element: <CommunityPage/>,
	}
]);

function App() {

	return (
		<Provider store={store}>
			<RouterProvider router={router}/>
		</Provider>
	);

}

export default App;
