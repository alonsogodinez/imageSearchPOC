import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import { expect } from 'chai';
import '@testing-library/jest-dom/extend-expect'
import Adapter from 'enzyme-adapter-react-16'
import ResultList from './ResultList'
import PreviewModal from '../PreviewModal/PreviewModal'
import GridListTile from '@material-ui/core/GridListTile';

Enzyme.configure({ adapter: new Adapter() })



const mockImages = [
  {
    url: "https://via.placeholder.com/300/09f.png/fff",
    title: "placeholder"
  },
  {
    url: "https://via.placeholder.com/303/09f.png/fff",
    title: "placeholder"
  },
  {
    url: "https://via.placeholder.com/302/09f.png/fff",
    title: "placeholder"
  },
  {
    url: "https://via.placeholder.com/304/09f.png/fff",
    title: "placeholder"
  },
  {
    url: "https://via.placeholder.com/301/09f.png/fff",
    title: "placeholder"
  }
]

test('Preview Modal opens  after tile item is clicked', () => {
  const list = shallow(<ResultList results={mockImages} />);
  expect(list.find(PreviewModal).prop('isOpen')).to.be.false
  const tiles = list.find(GridListTile)
  expect(tiles).to.have.length(5);
  tiles.at(0).simulate('click');
  expect(list.find(PreviewModal).prop('isOpen')).to.be.true
});

