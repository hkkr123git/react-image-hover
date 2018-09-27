# react-image-hover

react-image-hover library is used to introduce image hover contect effects. This will increate your web app user experience

### Installation

``
npm i --save react-image-hover
``

### Usage

```
import React, { Component } from 'react';
import ImageContentHover from 'react-image-hover';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageContentHover 
          className="image-cover"
          tileWidth="200px"
          tileHeight="200px" 
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/example-image.jpg" 
          content={{
            title: 'Image Title',
            body: 'Image content viewer'
          }} 
          effect="fadeIn" />
      </div>
    );
  }
}

export default App;
```

### Attributes

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| name | value |
| ------ | ------ |
| className | your class name |
| tileWidth | image tile width |
| tileHeight | image tile height |
| image | image url or image base64 string |
| content | This is a JSON object should have title and body as keys {title: '', body: ''}|
| effect | fadeIn, slideVertical, slideHorizontal |


License
----

MIT


**Free Software, Hell Yeah!**

