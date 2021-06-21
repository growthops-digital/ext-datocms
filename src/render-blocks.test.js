import renderBlocks from './render-blocks.js';

test('renders simple blocks as expected', () => {
	const blocks = [
		{
			_modelApiKey: 'foo',
			content: 'bar',
		},
	];

	const renderFooBlock = jest.fn(data => data.content);

	const result = renderBlocks({
		foo: renderFooBlock,
	}, blocks);

	expect(renderFooBlock).toHaveBeenCalled();
	expect(result).toEqual(expect.arrayContaining(['bar']));
});

test('renders simple blocks as expected — curried', () => {
	const blocks = [
		{
			_modelApiKey: 'foo',
			content: 'bar',
		},
	];

	const renderFooBlock = jest.fn(data => data.content);

	const render = renderBlocks({
		foo: renderFooBlock,
	});

	const result = render(blocks);

	expect(renderFooBlock).toHaveBeenCalled();
	expect(result).toEqual(expect.arrayContaining(['bar']));
});
