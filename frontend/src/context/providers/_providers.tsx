import * as React from "react";

import * as Context from "@/context";

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Context.Theme.Provider>
				<Context.Window.Provider>
					<Context.Scroll.Provider>
						<Context.Mouse.Provider>
							<Context.Location.Provider>
								<Context.Auth.Provider>
									<Context.UserAgent.Provider>
										<Context.Welcome.Provider>{children}</Context.Welcome.Provider>
									</Context.UserAgent.Provider>
								</Context.Auth.Provider>
							</Context.Location.Provider>
						</Context.Mouse.Provider>
					</Context.Scroll.Provider>
				</Context.Window.Provider>
			</Context.Theme.Provider>
		</>
	);
};
