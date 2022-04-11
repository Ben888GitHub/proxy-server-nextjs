module.exports = () => {
	const rewrites = () => {
		return [
			{
				source: '/cats',
				destination: 'https://meowfacts.herokuapp.com'
			},
			{ source: '/ducks', destination: 'https://random-d.uk/api/random' }
		];
	};
	// Rewrites allow you to map an Incoming Request Path to a different destination path.
	return { rewrites };
};
