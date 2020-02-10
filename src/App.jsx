import React from 'react';
import './App.scss';

import Button from './components/button/Button';
import Input from './components/input/Input';
import BlockText from './components/blockText/BlockText';
import Logo from './components/logo/Logo';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      spec: {
        sections: [
            {
                id: 'logo',
                component: 'Logo',
                property: {
                  id: 'logo',
                  className: 'logo-img',
                  name: 'img-logo'
                }
            },
            {
                id: 'blockText',
                component: 'BlockText',
                property: {
                  id: 'blockText',
                  className: 'block-text',
                  text: 'Children between the ages of 13 and 17 who have a mobile phone average 1,742 text messages each month, according to a report by the Nielsen Company in September 2008. That comes to nearly 60 per day. They also make 231 voice calls each month, close to eight per day. They play games on the device as well, and browse the Web, take pictures and log hours of social networking.'
                }
            },
            {
                id: 'input',
                component: 'Input',
                property: {
                  id: 'input',
                  className: 'input',
                  placeholder: 'enter text...',
                  label: 'Label field: '
                }
            },
            {
              id: 'button',
              component: 'Button',
              property: {
                id: 'button',
                className: 'button',
                value: 'Click'
              }
            }
        ]
      }
    }
  }

  getBlockComponent = (block) => {
    switch (block.id) {
      case 'logo':
        return <div className="app-block"><Logo key={block.id} {...block.property} /></div>

      case 'blockText':
        return <div className="app-block"><BlockText key={block.id} {...block.property} /></div>

      case 'input':
        return <div className="app-block"><Input key={block.id} {...block.property} /></div>

      case 'button':
        return <div className="app-block"><Button key={block.id} {...block.property} /></div>
    }
  }

  ChangeSpec = () => {
    let specReverse = this.state.spec;
    specReverse.sections.reverse();
    this.setState({
      spec: specReverse
    });
  }

  ChangeSpecAlign = () => {
    let specAlign = this.state.spec;
    specAlign.sections[0]['property']['className'] = "logo-img center";
    specAlign.sections[2]['property']['className'] = "input right";
    this.setState({
      spec: specAlign
    });
  }

  render () {
    return (
      <div className="app">
        <button onClick={this.ChangeSpec}>Change specification</button>  
        <button onClick={this.ChangeSpecAlign}>Change specification align</button> 
        {
          this.state.spec.sections.map(item => {
            return this.getBlockComponent(item)
          })
        }
      </div>
    );
  }
}
export default App;



