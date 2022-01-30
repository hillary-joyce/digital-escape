import React, {Fragment, useState} from 'react';

import { FolderIcon } from './primitives/Icons';
import Container from './primitives/Container';

const Folder = ({ folderTitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <button onClick={() => setIsOpen(true)}><FolderIcon /></button>
      {isOpen && (
        <Container hasMenu={false} title={folderTitle} onDismiss={() => setIsOpen(false)}>
          {children}
        </Container>
      )}
    </Fragment>
  )
}

export { Folder };