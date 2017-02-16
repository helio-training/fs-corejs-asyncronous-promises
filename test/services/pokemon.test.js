import Test from 'ava';
import * as Service from '../../src/services/pokemon';

Test(`#allPokemon() retrieves a list of pokemon`, async t => {
  const results  = await Service.allPokemon();
  console.log(results);
  t.truthy(results[0], 'abomasnow')
});

Test(`#allItems() retrieves a list of items`, async t => {
  const results = await Service.allItems();
  t.truthy(results.length >= 0);
  t.truthy(results[0], 'ability-capsule');
});
