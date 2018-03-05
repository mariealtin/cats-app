import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cats = [
        { id: 11, name: 'Sylvester', color: 'Black' },
        { id: 12, name: 'Tom', color: 'Grey' },
        { id: 13, name: 'Felix', color: 'Black and white' },
        { id: 14, name: 'Garfield', color: 'Ginger' },
        { id: 15, name: 'Eek', color: 'Purple' }
    ];
    return {cats};
  }
}