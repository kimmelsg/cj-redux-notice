##redux-notice

```
yarn add redux-notice
```

This isn't quite finished yet, but here's what it would look like!


##Example

![Notice](/example/img/demo.gif?raw=true "Notice")


##Install

1. Add the reducer

```
import reduxNotice from 'redux-notice/reducer'

let reducers = combineReducers({
  reduxNotice
})
```

2. Add the Notices component to the top level

```
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

3. Dispatch some notices!

![Notice](/example/img/notice.png?raw=true "Notice")

import { addNotice } from 'redux-notice'

```
store.dispatch(
  addNotice({
    type: 'error',
    text: 'You need to check your email and activate your account'
  }),
);
```
