import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import IndexPage from "./routes";
import MerchPage from "./routes/merch";

const router = createBrowserRouter([
	{
		path: "/",
		element: <IndexPage/>,
	},
	{
		path: "/merch",
		element: <MerchPage/>,
	},
]);

function App() {

	return (
		<Provider store={store}>
			<RouterProvider router={router}/>
		</Provider>
	);

}

export default App;
