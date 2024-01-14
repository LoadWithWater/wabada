import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import Index from "./routes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index/>,
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
