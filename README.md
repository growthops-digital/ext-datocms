# GrowthOps Ext DatoCMS

A collection of useful extensions built for [DatoCMS](https://www.datocms.com/).

## Functions

### renderBlocks

Renders out a collection of blocks as part of a DatoCMS modular field. This function requires that the collection of blocks include `_modelApiKey` as it will be utilised as the primary key for matching a block with its renderer.

**Example**
```js
import {renderBlocks} from '@growthops/ext-datocms';

// Example data from GraphQL query
const data = [
	{
		_modelApiKey: 'text',
		content: 'Lorem Ipsum Dolor Sit Amet Consectetur'
	},
	{
		_modelApiKey: 'image',
		url: 'https://example.com/image.jpg',
		alt: 'Dolor Sit Amet'
	}
];

const renderTextBlock = data => <p>{data.content}</p>;

const renderImageBlock = data => <img src={data.url} alt={data.alt}/>;

const App = () => (
	<div>
		{renderBlocks({
			text: renderTextBlock,
			image: renderImageBlock
		}, data)}
	</div>
);

// Rendered DOM:
// <div>
// 	<p>Lorem Ipsum Dolor Sit Amet Consectetur</p>
//  <img src="https://example.com/image.jpg" alt="Dolor Sit Amet"/>
// </div>
```
