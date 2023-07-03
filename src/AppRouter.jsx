import React from 'react';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />	
			</Route>
		</Routes>
	);
};
