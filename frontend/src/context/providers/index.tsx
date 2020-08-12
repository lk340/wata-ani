import * as React from "react";

import * as Context from "@/context";

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Context.Theme.Provider>
				<Context.Windows.Provider>
					<Context.Scroll.Provider>
						<Context.Mouse.Provider>
							<Context.Location.Provider>
								<Context.Auth.Provider>
									<Context.UserAgent.Provider>
										<Context.AuthForm.Provider>
											<Context.Welcome.Provider>{children}</Context.Welcome.Provider>
										</Context.AuthForm.Provider>
									</Context.UserAgent.Provider>
								</Context.Auth.Provider>
							</Context.Location.Provider>
						</Context.Mouse.Provider>
					</Context.Scroll.Provider>
				</Context.Windows.Provider>
			</Context.Theme.Provider>
		</>
	);
};

// const providers = [
// 	Context.Theme.Provider,
// 	Context.Window.Provider,
// 	Context.Scroll.Provider,
// 	Context.Mouse.Provider,
// 	Context.Location.Provider,
// 	Context.Auth.Provider,
// 	Context.UserAgent.Provider,
// 	Context.Filter.Provider,
// 	Context.Sort.Provider,
// 	Context.Demo.Provider,
// 	Context.Home.Provider,
// ];

// function generateProvider(providers: React.ReactNode[]) {
// 	if (providers.length === 1) return providers[0];

// 	const lastIndex = providers.length - 1;

// }

// const Children: React.FC<{ children: React.ReactNode }> = ({ children }) => {
// 	return <>{children}</>;
// };
