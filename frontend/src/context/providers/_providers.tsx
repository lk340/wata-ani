import * as React from "react";

import * as Context from "@/context";

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Context.Theme.Provider>
				<Context.Window.Provider>
					<Context.Scroll.Provider>
						<Context.Mouse.Provider>
							<Context.Auth.Provider>
								<Context.Todos.Provider>{children}</Context.Todos.Provider>
							</Context.Auth.Provider>
						</Context.Mouse.Provider>
					</Context.Scroll.Provider>
				</Context.Window.Provider>
			</Context.Theme.Provider>
		</>
	);
};
