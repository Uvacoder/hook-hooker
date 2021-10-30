# useNativeLazyLoading

Detect if the browser supports the new `loading` attribute on Image elements.
Combine this with [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)
to lazy load images with a fallback method.

> Checkout the [Storybook](https://ct-hooks.now.sh/?path=/story/usenativelazyloading--readme) demo.

## Installation

```sh
yarn add @charlietango/use-native-lazy-loading
```

## API

```js
const supported = useNativeLazyLoading(initialSupported)
```

## Example

Example of how to combine this with `react-intersction-observer`, to create a lazy loaded image.

```jsx
import React from 'react'
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading'
import { useInView } from 'react-intersection-observer'

const LazyImage = ({ width, height, src, ...rest }) => {
  const supportsLazyLoading = useNativeLazyLoading()
  const [ref, inView] = useInView({
    triggerOnce: true,
    skip: supportsLazyLoading !== false,
  })

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        paddingBottom: `${(height / width) * 100}%`,
        background: '#2a4b7a',
      }}
    >
      {inView || supportsLazyLoading ? (
        <img
          {...rest}
          src={src}
          alt="Placeholder kitten"
          loading="lazy"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
      ) : null}
    </div>
  )
}

export default LazyImage
```
