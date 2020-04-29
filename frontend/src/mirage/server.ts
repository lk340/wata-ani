import { Server, Model, Factory } from "miragejs";

export const makeServer = ({ environment = "Development" } = {}) => {
	const server = new Server({});

	return server;
};
