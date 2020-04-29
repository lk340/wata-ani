import React from "react";

import * as Wrappers from "@/wrappers";
import * as Components from "@/components";

const NotFoundPage = () => (
	<Wrappers.Layout>
		<Components.SEO title="404: Not found" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Wrappers.Layout>
);

export default NotFoundPage;
