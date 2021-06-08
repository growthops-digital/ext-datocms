import {pipe, toPairs, map, cond, propEq, curry} from 'ramda';

const renderBlocks = curry((functionMap, blocks) => {
	const conditions = pipe(
		toPairs,
		map(([key, renderer]) => [propEq('_modelApiKey', key), renderer])
	)(functionMap);

	return map(cond(conditions), blocks);
});

export default renderBlocks;
