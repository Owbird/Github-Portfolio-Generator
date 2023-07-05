import {createContext} from 'react';
import {GitUser} from '../data/dataDef';

export const GlobalContext = createContext<GitUser | undefined>(undefined);
