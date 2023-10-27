import { withReactContext } from 'storybook-react-context';
import { MemoryRouter } from 'react-router-dom';
import ninjas from '../src/assets/ninjas';

import globalStyles from '../src/globalStyles';
import '../src/fonts.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen'
}

export const decorators = [
  withReactContext({
    initialState: {
      user: {
        avatar: "https://i.pinimg.com/736x/3d/14/d7/3d14d7d215992bbedce4b5753081367f.jpg",
        level: 0,
        username: "mastersplinter",
        name: "Splinter"
      },
      userLevel: {
        lvlNum: 0,
        lvlName: 'Data Types',
        lvlColor: '#B9BA57',
        description: 'New ninjas learn about data in JavaScript. How many types of data are there?',
        lvlNinja: ninjas.ninja,
        lvlBelt: 'no',
        nextLvlBelt: 'white',
      }
    }
  }),
  (Story) => {

    globalStyles();
    return (
      <MemoryRouter initialEntries={['/levels/0']}>
        <main>
          <Story />
        </main>
      </MemoryRouter>
    );
  }
];
