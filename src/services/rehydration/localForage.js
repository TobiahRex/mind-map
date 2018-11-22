import localForage from 'localforage';

const reduxLocalForage = localForage.createInstance({
  name: 'SacHacks-2018',
  storeName: 'SacHacks-2018-redux-persist',
  description: 'Contains persisted values for redux store.'
});

export default reduxLocalForage;
