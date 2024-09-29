import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu'
import Icon from './components/icon/icon';
library.add(fas)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="coffee" theme="danger" size='10x' />
        <Menu defaultIndex="0" onSelect={(index) => { alert(index) }} defaultOpenSubMenus={['2']}>
          <MenuItem>cool link1</MenuItem>
          <MenuItem disabled>cool link2</MenuItem>
          <SubMenu title='dropdown' >
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
            <MenuItem>
              dropdown 3
            </MenuItem>
          </SubMenu>
          <MenuItem>cool link3</MenuItem>
        </Menu>

        <Button > Hello</Button>
        <Button disabled>Dissabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>large</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">baidu link</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled>   baidu link</Button>
      </header>
    </div>
  );
}

export default App;
