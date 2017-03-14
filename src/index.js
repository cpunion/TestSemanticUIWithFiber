import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Modal} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
  render () {
    return (
      <Modal trigger={<Button>Open</Button>}>
        <Modal.Header>Hello</Modal.Header>
        <Modal.Content>
          Hello Modal
        </Modal.Content>
      </Modal>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
