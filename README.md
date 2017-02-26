##redux-notice

```
yarn add redux-notice
```

This isn't quite finished yet, but here's what it would look like!


##Example

![Notice](/example/img/demo.gif?raw=true "Notice")


##Install

**Add the reducer**

```js
import reduxNotice from 'redux-notice/reducer'

let reducers = combineReducers({
  reduxNotice
})
```

**Add the Notices component to the top level**

```js
import Notices from 'redux-notice/component'

export default () => (
  <Provider store={store}>
    <div>
      <Notices />
      <Container />
      <Footer />
    </div>
  </Provider>
);

```

**Dispatch some notices!**

```js
import { addNotice } from 'redux-notice'

store.dispatch(
  addNotice({
    type: 'error',
    text: 'You need to check your email and activate your account'
  }),
);
```

![Notice](/example/img/notice.png?raw=true "Notice")


##Options

**Component**

The notices component by default will display an icon, title and `text` that you pass to the `addNotice` action. You can change the actual component being rendered for each notice if [this](/component/index.js) isn't good enough for you:

```js

import Notices from 'redux-notice/component'

export default () => (
  <Provider store={store}>
    <div>
      <Notices
        item={error => <p>{error.text}</p>}
      />
    </div>
  </Provider>
);

```
