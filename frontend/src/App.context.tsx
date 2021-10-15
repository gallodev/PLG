import { createContext } from 'react';

import {
  fetchRocketData
} from './api/rocket';

const ctx = {
  api: {
    fetchRocketData
  },
};

export default createContext(ctx);
