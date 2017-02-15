import Test from 'ava';
import * as Service from '../../src/services/pokemon';

Test(`#allPokemon() retrieves a list of pokemon`, async t => {
  const { results } = await Service.allPokemon();
  t.truthy(results.length >= 0);
});

Test(`#allPokemonTypes() retrieves a list of pokemon types`, async t => {
  const { results } = await Service.allPokemonTypes();
  console.log(results);
  t.truthy(results.length >= 0);
});

Test(`#allPokemonTypes() retrieves a list of pokemon colors`, async t => {
  const { results } = await Service.allPokemonColors();
  console.log(results);
  t.truthy(results.length >= 0);
});

Test(`#allBerries() retrieves a list of berries`, async t => {
  const { results } = await Service.allBerries();
  t.truthy(results.length >= 0);
});

Test(`#allSpecies() retrieves a list of species`, async t => {
  const { results } = await Service.allSpecies();
  t.truthy(results.length >= 0);
});

Test(`#allItems() retrieves a list of items`, async t => {
  const { results } = await Service.allItems();
  t.truthy(results.length >= 0);
});

Test(`#allEvolutions() retrieves a list of evolutions`, async t => {
  const { results } = await Service.allEvolutions();
  t.truthy(results.length >= 0);
});

Test(`#allEvolutionTriggers() retrieves a list of evolution triggers`, async t => {
  const { results } = await Service.allEvolutionTriggers();
  t.truthy(results.length >= 0);
});



