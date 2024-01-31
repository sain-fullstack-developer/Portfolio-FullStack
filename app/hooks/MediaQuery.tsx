// useMediaQuery.js
import { useEffect, useState } from "react";

const useMediaQuery = (query: any) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(query);

		const handleMediaQueryChange = (event: any) => {
			setMatches(event.matches);
		};

		// Initial check
		handleMediaQueryChange(mediaQueryList);

		// Add event listener for changes
		mediaQueryList.addEventListener("change", handleMediaQueryChange);

		// Cleanup
		return () => {
			mediaQueryList.removeEventListener("change", handleMediaQueryChange);
		};
	}, [query]);

	return matches;
};

export default useMediaQuery;

