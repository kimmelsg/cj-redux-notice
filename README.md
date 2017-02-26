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
