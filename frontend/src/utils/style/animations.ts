import * as Spring from "react-spring";

export function intro(delay: number, config: string) {
	return Spring.useSpring({
		from: { opacity: 0, transform: "translateY(-20px)" },
		to: { opacity: 1, transform: "translateY(0px)" },
		delay,
    config:
      config === "gentle"
				? Spring.config.gentle
      : config === "molasses"
				? Spring.config.molasses
      : config === "slow"
				? Spring.config.slow
      : config === "stiff"
				? Spring.config.stiff
			: config === "wobbly"
				? Spring.config.wobbly
			: Spring.config.default
	});
}
