# package-adrienm

## Description

`package-adrienm` est un package React qui fournit un composant Modal afin d'afficher une fenetre modal

## Installation

Installez `package-adrienm` avec npm :

```bash
npm install package-adrienm

Ou avec yarn :

yarn add package-adrienm
```

## Utilisation

Voici comment utiliser `package-adrienm` dans votre projet :

```javascript
import { Component } from 'package-adrienm';

function App() {
  return <Component />;
}

export default App;
```

## API

### `Modal`

`Modal` est un composant qui affiche une fenêtre modale.

#### Props

- `text` (string) : Le texte à afficher dans la modale.
- `modalOpen` (boolean) : Un booléen qui détermine si la modale est ouverte ou fermée.
- `closeModal` (function) : Une fonction qui est appelée pour fermer la modale.

## Exemple d'utilisation

Voici un exemple de la façon dont vous pouvez utiliser le composant `Modal` dans votre application :

```javascript
import React, { useState } from 'react';
import { Modal } from 'package-adrienm';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Ouvrir la modale</button>
      {modalOpen && (
        <Modal
          text='Ceci est une modale'
          modalOpen={modalOpen}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
```
